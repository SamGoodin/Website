/**
 * 
 */
function onloadMenu() {
	/* Test for Cookies */
	var text = "";
	if (navigator.cookieEnabled == true) {
		text = "Cookies are enabled.";
	} 
	else {
		text = "Cookies are not enabled.";
	}
	createMenu();
	
}

function createMenu() {
	var menuDiv = document.getElementById("menu");
	const menuItems = [
		["Home", "a", "index.html"],
		["My GitHub", "a", "https://github.com/SamGoodin"],
		["My Linkedin", "a", "https://www.linkedin.com/in/samuel-goodin-8a17ab152/"],
		["My Twitch", "a", "https://www.twitch.tv/xsammyboi"],
		["Solaris", "a", "solaris_stream.html"]
	]
	
	var length = menuItems.length;
	for (let i = 0; i < length; i++) {
		var link = document.createElement(menuItems[i][1]);
		link.href = menuItems[i][2];
		link.innerHTML = menuItems[i][0];
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

