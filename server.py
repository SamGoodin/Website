from flask import Flask, render_template, redirect, url_for, request
import requests
from bs4 import BeautifulSoup

app = Flask(__name__)


@app.route('/index')
@app.route('/index.html')
@app.route('/')
def index():
    return render_template('index.html')


@app.route('/solaris_stream.html')
def stream():
    return render_template("solaris_stream.html")


@app.route('/web_scraper.html')
def webScraper():
    return render_template('web_scraper.html')


@app.route('/web_scraper.html', methods=['POST'])
def completeScrape(site=None):
    print("working...")

    # Web Scraping
    text = request.form['text']
    data = requests.get(text)

    # load data into bs4
    soup = BeautifulSoup(data.text, 'html.parser')

    print("done")

    return render_template("web_scraper.html", data=soup.prettify())


@app.route('/...myOWRanks/')
def getRanks():
    print("working...")

    # Web Scraping
    data = requests.get('https://playoverwatch.com/en-us/career/pc/xSammyBoi-1750/')

    # load data into bs4
    soup = BeautifulSoup(data.text, 'html.parser')

    allSR = soup.find_all(attrs={'class': "competitive-rank-level"})
    tankSR = allSR[0].text
    dpsSR = allSR[1].text
    supportSR = allSR[2].text
    allRanksNeat = [tankSR, dpsSR, supportSR]

    print("done")

    # TODO: figure out how to pass data through redirect back to page
    return redirect(request.referrer)
    #return render_template("web_scraper.html", data=allRanksNeat)

"""
@app.route('/post/<int:post_id>')
def show_post(post_id):
    return "<h2>Post ID is %s<h2>" % post_id
"""


if __name__ == '__main__':
    app.run(debug=True)