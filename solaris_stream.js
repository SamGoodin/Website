/**
 * 
 */
function onloadStream() {
	
	onloadMenu();
	
	var SolarisStreamSrc = "";
	
	if (!window.localStorage.getItem("lastSolarisSrc") || window.localStorage.getItem("lastSolarisSrc") == null) {
		SolarisStreamSrc = prompt("Please enter the stream source"); 
		window.localStorage.setItem("lastSolarisSrc", SolarisStreamSrc);
	}
	else {
		SolarisStreamSrc = window.localStorage.getItem("lastSolarisSrc");
	}
	
	createSolarisStream(SolarisStreamSrc);
	var streamSrcP = document.createElement("p");
	streamSrcP.id = "streamSrc";
	streamSrcP.innerHTML = "Current source: " + SolarisStreamSrc;
	document.getElementById("homepage").appendChild(streamSrcP);
	
	var resourceBtn = document.createElement("button");
	resourceBtn.type = 'button';
	resourceBtn.innerHTML = 'Use new source';
	resourceBtn.onclick = getNewSource;
	document.getElementById("homepage").appendChild(resourceBtn);
	
}

function getNewSource() {
	var newSrc = prompt("Please enter the stream source"); 
	window.localStorage.setItem("lastSolarisSrc", newSrc);
	document.getElementById("player").src = newSrc;
	document.getElementById("streamSrc").innerHTML = "Current source: " + newSrc;

}

function createSolarisStream(source) {
	var body = document.getElementById("homepage");
	newiframe = document.createElement("iframe");
	newiframe.id = "player";
	newiframe.src = source;
	newiframe.height = 400;
	newiframe.width = 500;
	body.appendChild(newiframe);
}
