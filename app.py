from flask import Flask, render_template

app = Flask(__name__,
            static_folder='static',
            template_folder='templates')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/article/<article_name>')
def wiki(article_name):
    return f'{article_name} not exit'

if __name__ == '__main__':
    app.run(debug=True)