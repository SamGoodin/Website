from flask import Flask, render_template, redirect, url_for, request
import requests
from bs4 import BeautifulSoup

app = Flask(__name__)

#--------------- Index ---------------------------------

@app.route('/index')
@app.route('/index.html')
@app.route('/')
def index():
    print("Returning index")
    return render_template('index.html')

#--------------- Stream ---------------------------------

@app.route('/solaris_stream.html')
def stream():
    print("Returning stream page")
    return render_template("solaris_stream.html")

#--------------- Web Scraper ---------------------------------

@app.route('/web_scraper.html')
def web_scraper():
    print("Returning web scraper page")
    return render_template('web_scraper.html')

@app.route('/web_scraper.html-owRankScrape', methods=['POST'])
def owRankScrape():
    print(".OWRankScrape: Begin")
    data = requests.get('https://playoverwatch.com/en-us/career/pc/xSammyBoi-1750/')
    
    # load data into bs4
    soup = BeautifulSoup(data.text, 'html.parser')

    allSR = soup.find_all(attrs={'class': "competitive-rank-level"})
    tankSR = allSR[0].text
    dpsSR = allSR[1].text
    supportSR = allSR[2].text
    allRanksNeat = [tankSR, dpsSR, supportSR]
    print(f"...OWRankScrape: Returning {allRanksNeat}")

    print(".OWRankScrape: Finish!")

    return render_template("web_scraper.html", data=allRanksNeat)

@app.route('/web_scraper.html-siteScrape', methods=['POST'])
def siteScrape():
    print(".SiteScrape: Begin")
    # Web Scraping
    text = request.form['text']
    data = requests.get(text)

    # load data into bs4
    soup = BeautifulSoup(data.text, 'html.parser')

    #print(f"...SiteScrape: Returning {soup.prettify()}.")
    """
    Error with above code:
    UnicodeEncodeError: 'charmap' codec can't encode characters 
    in position 2004223-2004229: character maps to <undefined>
    """

    print(".SiteScrape: Finish!")

    return render_template("web_scraper.html", data=soup.prettify())

#--------------- Algorithms ---------------------------------

@app.route('/algorithms.html')
def algorithms():
    print("Returning algorithm page")
    return render_template("algorithms.html")

#------------------------------------------------------------

"""
@app.route('/post/<int:post_id>')
def show_post(post_id):
    return "<h2>Post ID is %s<h2>" % post_id
"""


if __name__ == '__main__':
    app.run(debug=True)