from buy_sell import *

@app1.route('/')
def index():
    return render_template('index.html')