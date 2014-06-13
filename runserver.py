from buy_sell import app1
import os
app1.secret_key=os.urandom(24)
app1.run(debug=True)
