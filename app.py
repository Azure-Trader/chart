from flask import Flask, render_template
import pandas as pd

app = Flask(__name__)

@app.route('/')
def index():
    # Load your data
    df = pd.read_csv('C:/Users/AZURE/Documents/AI/Indicators/Flask App/btcusdt_1min.csv')
    data = df.to_dict(orient='records')

    # Pass data to the template
    return render_template('index.html', data=data)

if __name__ == '__main__':
    app.run(debug=True)
