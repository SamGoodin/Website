/**
 *
 */
function onloadScraper() {

	onloadMenu();

	setupButtons();

}

function setupButtons() {
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
	document.getElementById("homepage").appendChild(owButton);

    var form = document.createElement("form");
    form.method = "POST";
	form.action = '/web_scraper.html-siteScrape';
    var formInput1 = document.createElement("input");
    formInput1.name = "text";
    var formInput2 = document.createElement("input");
    formInput2.type = "submit";
    form.appendChild(formInput1);
    form.appendChild(formInput2);
    document.getElementById("homepage").appendChild(form);
}
