from flask import Flask
from routes import api

from flask_cors import CORS
CORS(api)

app = Flask(__name__)
app.register_blueprint(api)

if __name__ == "__main__":
    app.run(debug=True)
