from flask import Flask
app = Flask(__name__)


@app.route('/')

def index:
  return "hello upgrad students from santosh"
