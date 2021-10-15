/**
 * 
 */
function onloadMain() {
	// This is called for every webpage on the domain
	
	// Setup index page
	setupIndex();
	
}

function setupIndex() {
	/* Test for Cookies */
	if (navigator.cookieEnabled == true) {
		/* Cookies enabled */
	} 
	else {
		/* Cookies not enabled */
	}
	
	createHeader();
	createMenu();
}

function toggleDarkMode() {
	var btn = document.getElementById("dark-mode");
	var curTheme = document.documentElement.getAttribute("data-theme");
	if (curTheme == 'dark') {
		document.documentElement.setAttribute('data-theme', 'light');
		btn.innerHTML = "Dark Mode";
	}
	else {
		document.documentElement.setAttribute('data-theme', 'dark');
		btn.innerHTML = "Light Mode";
	}
}

function createHeader () {
	var header = document.getElementById("header");
	
	var samInfo = document.createElement("div");
	samInfo.id = "samInfo";
	header.appendChild(samInfo);

	var headshot = document.createElement("img");
	headshot.id = "headshot";
	headshot.src = "static/media/headshot.png";
	headshot.alt = "Sam Goodin Headshot";
	headshot.width = 75;
	headshot.height = 75;
	samInfo.appendChild(headshot);
	
	var name = document.createElement("h1");
	name.id = "name";
	name.innerHTML = "Sam Goodin";
	samInfo.appendChild(name);
	
	var info = document.createElement("h3");
	info.id = "info";
	info.innerHTML = "IUPUI '21 Bachelors of Science in Computer Science";
	samInfo.appendChild(info);
	
	var darkMode = document.createElement("button");
	darkMode.id = "dark-mode";
	darkMode.onclick = toggleDarkMode;
	darkMode.innerHTML = "Dark Mode";
	samInfo.append(darkMode);
}

function createMenu() {
	var menuDiv = document.getElementById("menu");
	const menuItems = [
		["Home", "a", "index.html"],
		["My GitHub", "a", "https://github.com/SamGoodin", "__blank"],
		["My Linkedin", "a", "https://www.linkedin.com/in/samuel-goodin-8a17ab152/", "__blank"],
		["My Twitch", "a", "https://www.twitch.tv/xsammyboi", "__blank"],
		["Solaris", "a", "solaris_stream.html"],
		["Python Scraper", "a", "web_scraper.html"],
		["Algorithms", "a", "algorithms.html"]
	]
	
	var length = menuItems.length;
	for (let i = 0; i < length; i++) {
		var link = document.createElement(menuItems[i][1]);
		link.href = menuItems[i][2];
		link.innerHTML = menuItems[i][0];
		if (menuItems[i][3]) {
			link.target = menuItems[i][3];
		}
		menuDiv.appendChild(link);
	}
	
	menuFormat(menuDiv.getElementsByTagName("a"));
	
}

function menuFormat(menuItems) {
	length = menuItems.length;
	for (let i = 0; i < length - 1; i++) {
		menuItems[i].innerHTML = menuItems[i].innerHTML + ' | ';
	}
}

function resizeAll(width, height) {
	resizeAllWidth(width);
	resizeAllHeight(height);
}

function resizeAllHeight(height) {
	// Takes height as integer representing the pixel height of each component
	document.getElementById("header").style.height = height + "px";
	document.getElementById("menu").style.height = height + "px";
	document.getElementById("homepage").style.height = height + "px";
}

function resizeAllWidth(width) {
	// Takes width as integer representing the pixel width of each component
	document.getElementById("header").style.width = width + "px";
	document.getElementById("menu").style.width = width + "px";
	document.getElementById("homepage").style.width = width + "px";
}

