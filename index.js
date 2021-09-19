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
	createMenu();
	
}

function createMenu() {
	var menuDiv = document.getElementById("menu");
	const menuItems = [
		["Home", "a", "index.html"],
		["My GitHub", "a", "https://github.com/SamGoodin", "__blank"],
		["My Linkedin", "a", "https://www.linkedin.com/in/samuel-goodin-8a17ab152/", "__blank"],
		["My Twitch", "a", "https://www.twitch.tv/xsammyboi", "__blank"],
		["Solaris", "a", "solaris_stream.html"]
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

