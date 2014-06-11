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

@app.route('/postit',methods=['GET','POST'])
def postit():
	if request.method=="POST":
		db=get_cursor()
		content = request.form['content']
		posttype = int(request.form['ctype'])
		now = datetime.datetime.today()
		query = 'insert into AnonymousPosts (Date, PostContent, Type) values ("%s","%s","%s")'
		db.execute(query%(now,content,posttype))
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
	return render_template('login.html', error=error)

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
	return render_template('screen.html',posts=posts) #show_entries
		
@app.route("/")
def mainscreen():
    db = get_cursor()
    sql = 'select * from AnonymousPosts order by Date desc'
    db.execute(sql)
    posts = db.fetchall()
    db.execute("commit")
    return render_template('screen.html',posts=posts) #show_entries

if __name__ == "__main__":
	app.debug = True
	app.secret_key=os.urandom(24)
	app.run()