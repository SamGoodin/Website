/**
 *
 */
function onloadScraper() {

	// Always call to load main page components
	onloadMain();

	// Setup scraper page
	setupButtons();

}

function setupButtons() {
	var homepage = document.getElementById("homepage");
	
	// Create btn for ow rank scraping
    var owButton = document.createElement("form");
	owButton.method = "POST";
	owButton.action = "/web_scraper.html-owRankScrape";
	var rankInput = document.createElement("input");
	rankInput.name = "ranks";
	rankInput.value = true;
	rankInput.type = "hidden";
	var owBinput = document.createElement("input");
	owBinput.type = "submit";
	owBinput.value = "Overwatch Ranks";
	owButton.appendChild(rankInput);
	owButton.appendChild(owBinput);
	homepage.appendChild(owButton);

	// Create text box and submit btn for site scrape
    var form = document.createElement("form");
    form.method = "POST";
	form.action = '/web_scraper.html-siteScrape';
    var formInput1 = document.createElement("input");
    formInput1.name = "text";
	formInput1.required = true;
    var formInput2 = document.createElement("input");
    formInput2.type = "submit";
    form.appendChild(formInput1);
    form.appendChild(formInput2);
    homepage.appendChild(form);

	if (document.getElementById("data")) {
		// Reveal data and make data the last element in the DOM
		data.hidden = false;
		homepage.insertBefore(data, homepage.lastChild.nextSibling);
	}
}
