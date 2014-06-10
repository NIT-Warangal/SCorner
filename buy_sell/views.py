from buy_sell import *
from flaskext.mysql import MySQL
from config import config

mysql = MySQL()
mysql.init_app(app1)

for key in config:
    app1.config[key] = config[key]
app1.config.from_object(__name__)

def get_cursor():
    return mysql.connect().cursor()

@app1.route('/')
def index():
    return render_template('index.html')

@app1.route('/store')
def store():
	db=get_cursor()
	sql="select * from store"
	db.execute(sql)
	entries=db.fetchall()
	uploader=[]
	for entry in entries:
		sql='select UserName from login where RollNo="%s"'%(entry[0])
		db.execute(sql)
		uploader.append(db.fetchone())
		db.execute("commit")
	db.execute('select distinct Category from store')		
	category=db.fetchall()
	return render_template('store.html',entries=entries,uploader=uploader,category=category)

@app1.route('/filter',methods=['POST'])
def filter():
	db=get_cursor()
	category=request.form['filter']
	sql='select * from store where category="%s"'%(category)
	db.execute(sql)
	entries=db.fetchall()
	uploader=[]
	for entry in entries:
		sql='select UserName from login where RollNo="%s"'%(entry[0])
		db.execute(sql)
		uploader.append(db.fetchone())
		db.execute("commit")
	db.execute('select distinct Category from store')		
	category=db.fetchall()
	return render_template('store.html',entries=entries,uploader=uploader,category=category)