import os,binascii
from flask import Flask, request, session, g, redirect, url_for, abort, \
     render_template, flash
from flaskext.mysql import MySQL
from config import config
import datetime

mysql = MySQL()
# create our little application :)

app = Flask(__name__)

for key in config:
    app.config[key] = config[key]

mysql.init_app(app)
app.config.from_object(__name__)

def get_cursor():
    return mysql.connect().cursor()

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

@app.teardown_appcontext
def close_db():
    """Closes the database again at the end of the request."""
    get_cursor().close()

@app.route('/postblog',methods=['GET','POST'])
def postblog():
	if request.method=="POST":
		return redirect(url_for('mainscreen'))
	return render_template('editor.html')

@app.route('/postit',methods=['GET','POST'])
def postit():
	if request.method=="POST":
		db=get_cursor()
		user = app.config['USERNAME']
		content = request.form['content']
		posttype = int(request.form['ctype'])
		privacytype = int(request.form['ptype'])
		now = datetime.datetime.today()
		if privacytype == 2:
			query = 'insert into AnonymousPosts (Date, PostContent, Type, LikeCount,Name) values ("%s","%s","%s","0","Anonymous")'
			db.execute(query%(now,content,posttype))
			db.execute("commit")
			return redirect(url_for('mainscreen'))
		else:
			likecount=0
			query = 'insert into AnonymousPosts (Date,PostContent,Type,LikeCount,Name) values ("%s","%s","%s","%s","%s")'
			db.execute(query%(now,content,posttype,likecount,user))
			db.execute("commit")
			flash('Posted at '+now.strftime('%d/%m/%y'))
			return redirect(url_for('mainscreen'))
	return redirect(url_for('mainscreen'))

@app.route("/login",methods = ['GET','POST'])
def login():
	error = None
	db = get_cursor()
	session['temp']=0
	if request.method=='POST':
		uname=str(request.form['username'])
		pwd=str(request.form['password'])
		sql = 'select Count(*) from Login where UserName="%s" and Password=MD5("%s")'%(uname,pwd)
		db.execute(sql)
		data = db.fetchone()[0]
		if not data:
			error='Invalid username/password'
		else:
			session['logged_in'] = True
			sql='select Role from Login where UserName="%s" and Password=MD5("%s")'%(uname,pwd)
			db.execute(sql)
			result=db.fetchone()[0]
			session['temp']=result
			sql='select Sno from Login where UserName="%s" and Password=MD5("%s")'%(uname,pwd)
			db.execute(sql)
			uid=db.fetchone()[0]
			db.execute("COMMIT")
			app.config['USERNAME'] = uname
			app.config['USERID'] = uid
			flash('You were logged in ')
			return redirect(url_for('mainscreen'))
	return render_template('login.html', error=error,UName=app.config['USERNAME'])

@app.route('/like',methods=['POST'])
def like():
	db=get_cursor()
	if request.method=='POST':
		sql='select count(*) from AnonymousPosts'
		db.execute(sql)
		num_of_rows=db.fetchone()[0]
		# flash(num_of_rows)
		if num_of_rows>0:
			for i in range(0,int(num_of_rows)):
				if request.form['like']=='like'+str(i):
					r=str(i)
					sno=int(request.form['sno'+r])
					sql='select count(*) from like_history where sno=%s and username="%s"'%(sno,app.config['USERNAME'])
					db.execute(sql)
					result=db.fetchone()[0]
					if result<=0:
						sql='insert into like_history values(%s,"%s",1)'%(sno,app.config['USERNAME'])
					else:
						sql='update like_history set activity=1 where sno=%s and username="%s"'%(sno,app.config['USERNAME'])
					db.execute(sql)
					db.execute("commit")
					sql='update AnonymousPosts set `LikeCount`=`LikeCount`+1 where Sno=%s'%(sno)
					db.execute(sql)
					db.execute("commit")
					# flash("You liked "+str(sno)+" post")
					return redirect(url_for('mainscreen'))
				elif request.form['like']=='dislike'+str(i):
					r=str(i)
					sno=int(request.form['sno'+r])
					sql='select count(*) from like_history where sno=%s and username="%s"'%(sno,app.config['USERNAME'])
					db.execute(sql)
					result=db.fetchone()[0]
					if result<=0:
						sql='insert into like_history values(%s,"%s",1)'%(sno,app.config['USERNAME'])
					else:
						sql='update like_history set activity=0 where sno=%s and username="%s"'%(sno,app.config['USERNAME'])
					db.execute(sql)
					db.execute("commit")
					sql='update AnonymousPosts set `LikeCount`=`LikeCount`-1 where Sno=%s'%(sno)
					db.execute(sql)
					db.execute("commit")
					# flash("You disliked "+str(sno)+" post")
					return redirect(url_for('mainscreen'))
		flash('No posts???')
		return redirect(url_for('mainscreen'))

@app.route('/logout')
def logout():
    if session['logged_in'] != None:
        if session['logged_in']==True:
            session.pop('logged_in', None)
            session.pop('temp',0)
            flash('You were logged out')
        else:
            flash('Welcome Back!')
    return redirect(url_for('mainscreen'))

@app.route("/filter",methods=['POST'])
def filter():
	db=get_cursor()
	filter_num=int(request.form['filter'])
	sql = 'select * from AnonymousPosts order by Date desc'
	if filter_num>0:
		sql='select * from AnonymousPosts where Type=%s'%(filter_num)
	db.execute(sql)
	posts=db.fetchall()
	db.execute("commit")
	activity=[]
	for post in posts:
		sql='select activity from like_history where sno=%s and username="%s"'%(post[0],app.config['USERNAME'])
		db.execute(sql)
		result=db.fetchone()
		db.execute("commit")
		if result is None:
			like=-1
		else:
			like=int(result[0])
		activity.append(int(like))
	return render_template('screen.html',posts=posts,UName=app.config['USERNAME'],activity=activity) #show_entries
		
@app.route("/")
def mainscreen():
    db = get_cursor()
    sql = 'select * from AnonymousPosts order by Date desc'
    db.execute(sql)
    posts = db.fetchall()
    db.execute("commit")
    activity=[]
    for post in posts:
    	sql='select activity from like_history where sno=%s and username="%s"'%(post[0],app.config['USERNAME'])
    	db.execute(sql)
    	result=db.fetchone()
    	db.execute("commit")
    	if result is None:
    		like=-1
    	else:
    		like=int(result[0])
    	activity.append(int(like))
    return render_template('screen.html',posts=posts,UName=app.config['USERNAME'],activity=activity) #show_entries

if __name__ == "__main__":
	app.debug = True
	app.secret_key=os.urandom(24)
	app.run()