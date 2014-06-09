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
	return render_template('store.html',entries=entries)