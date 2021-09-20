/**
 * 
 */
function onloadMenu() {
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

function createHeader () {
	var header = document.getElementById("header");
	
	var samInfo = document.createElement("div");
	samInfo.id = "samInfo";
	header.appendChild(samInfo);
	
	var headshot = document.createElement("img");
	headshot.id = "headshot";
	headshot.src = "media/headshot.png";
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
}

function createMenu() {
	var menuDiv = document.getElementById("menu");
	const menuItems = [
		["Home", "a", "index.html"],
		["My GitHub", "a", "https://github.com/SamGoodin", "__blank"],
		["My Linkedin", "a", "https://www.linkedin.com/in/samuel-goodin-8a17ab152/", "__blank"],
		["My Twitch", "a", "https://www.twitch.tv/xsammyboi", "__blank"],
		["Solaris", "a", "solaris_stream.html"],
		["mp4 Player", "a", "mp4_player.html"]
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

