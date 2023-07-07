'use strict';
function homeFunc() {
	window.location.replace("../index.html");
}
function aboutFunc() {
	window.location.replace("../about/index.html");
}
function artistDrop() {
	document.getElementById("artistdrop").classList.toggle("show");
}
function shopDrop() {
	document.getElementById("shopdrop").classList.toggle("show");
}
function facedFunc() {
	window.location.replace("../facedOut/index.html");
}
function dfcFunc() {
	window.location.replace("../dfc/index.html");
}
function atdFunc() {
	window.location.replace("../degen/index.html");
}
function merchFunc() {
	window.location.replace("../merch/index.html");
}
function cdFunc() {
	window.location.replace("../cds/index.html");
}
function tapeFunc() {
	window.location.replace("../tapes/index.html");
}

window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {
		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}

