/**
 * 
 */
function onloadStream() {
	
	// Always call to load main page components
	onloadMain();
	
	// Setup stream page
	setupStreamPage();
}

function setupStreamPage() {
	var SolarisStreamSrc = "";
	
	if (!window.localStorage.getItem("lastSolarisSrc") || window.localStorage.getItem("lastSolarisSrc") == null) {
		SolarisStreamSrc = prompt("Please enter the stream source"); 
		window.localStorage.setItem("lastSolarisSrc", SolarisStreamSrc);
	}
	else {
		SolarisStreamSrc = window.localStorage.getItem("lastSolarisSrc");
	}
	
	var streamSrcP = document.createElement("p");
	streamSrcP.id = "streamSrc";
	streamSrcP.innerHTML = "Current source: " + SolarisStreamSrc;
	document.getElementById("homepage").appendChild(streamSrcP);
	
	var resourceBtn = document.createElement("button");
	resourceBtn.type = 'button';
	resourceBtn.innerHTML = 'Use new source';
	resourceBtn.onclick = getNewSource;
	document.getElementById("homepage").appendChild(resourceBtn);
	
	createSolarisStream(SolarisStreamSrc);
	
}

function getNewSource() {
	var newSrc = prompt("Please enter the stream source"); 
	if (newSrc != null) {
		window.localStorage.setItem("lastSolarisSrc", newSrc);
		document.getElementById("player").src = newSrc;
		document.getElementById("streamSrc").innerHTML = "Current source: " + newSrc;
	}
}

function createSolarisStream(source) {
	var body = document.getElementById("homepage");
	newiframe = document.createElement("iframe");
	newiframe.id = "player";
	newiframe.src = source;
	newiframe.height = 720;
	newiframe.width = 1280;
	newiframe.setAttribute('allowFullScreen', '');
	newiframe.style = "border:4px solid blue"
	body.appendChild(newiframe);

	resizeHomepage(newiframe, homepage=body);
}

function resizeHomepage(iframe, homepage=null) {
	if (!homepage) {
		homepage = document.getElementById("homepage");
	}
    if (homepage.style.width < iframe.width) {
		resizeAllWidth(parseInt(iframe.width) + 50);
    }
    if (homepage.style.height < iframe.height) {
        homepage.style.height = parseInt(iframe.height) + 70 + "px";
    }
}
