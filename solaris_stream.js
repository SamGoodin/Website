/**
 * 
 */
function onloadStream() {
	
	onloadMenu();
	
	var SolarisStreamSrc = "";
	
	if (!window.localStorage.getItem("lastSolarisSrc")) {
		SolarisStreamSrc = prompt("Please enter the stream source"); 
		window.localStorage.setItem("lastSolarisSrc", SolarisStreamSrc);
	}
	else {
		SolarisStreamSrc = window.localStorage.getItem("lastSolarisSrc");
	}
	
	createSolarisStream(SolarisStreamSrc);
	var streamSrcP = document.createElement("p");
	streamSrcP.innerHTML = "Last source used: " + SolarisStreamSrc;
	document.getElementById("homepage").appendChild(streamSrcP);
	
}

function createSolarisStream(source) {
	var body = document.getElementById("homepage");
	newiframe = document.createElement("iframe");
	newiframe.src = source;
	newiframe.height = 400;
	newiframe.width = 500;
	body.appendChild(newiframe);
}
