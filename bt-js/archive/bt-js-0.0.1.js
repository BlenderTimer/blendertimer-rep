// --------------- SCRIPT INFORMATION ---------------
//
//    Author: Daniel Roberts (BlenderTimer)
//    Version: 0.0.1
//    Last Updated: January 8, 2024
//
// --------------------------------------------------

// ---------- CURSOR INFORMATION AND FUNCTIONS ----------
// Get Cursor Position
var cursor = {x:0, y:0, xScreen:0, yScreen:0, lastX:0, lastY:0, lastScreenX:0, lastScreenY:0, xVelocity:0, yVelocity:0, xSpeed:0, ySpeed:0, eleOver:document, lastTrigger:Date.now()};
document.addEventListener('mousemove', gcp7316)

function gcp7316(event) {
	//Last cursor position relative to the page
	cursor.lastX = cursor.x;
	cursor.lastY = cursor.y;
	//Last cursor position relative to the screen
	cursor.lastScreenX = cursor.xScreen;
	cursor.lastScreenY = cursor.yScreen;
	//Cursor position relative to the page
	cursor.x = event.pageX;
	cursor.y = event.pageY;
	//Cursor position relative to the screen
	cursor.xScreen = event.screenX;
	cursor.yScreen = event.screenY;
	//Cursor velocity (pixels moved since last trigger)
	cursor.xVelocity = cursor.x - cursor.lastX;
	cursor.yVelocity = cursor.y - cursor.lastY;
	//Cursor speed (pixels moved since last trigger, all positive values)
	cursor.xSpeed = cursor.xVelocity.toPositive();
	cursor.ySpeed = cursor.yVelocity.toPositive();
	cursor.lastTrigger = Date.now();
	var cInt1 = setInterval(function() {
		if ((Date.now() - cursor.lastTrigger) > 100) {
			//Last cursor position relative to the page
			cursor.lastX = cursor.x;
			cursor.lastY = cursor.y;
			//Last cursor position relative to the screen
			cursor.lastScreenX = cursor.xScreen;
			cursor.lastScreenY = cursor.yScreen;
			//Cursor velocity (pixels moved since last trigger)
			cursor.xVelocity = 0;
			cursor.yVelocity = 0;
			//Cursor speed (pixels moved since last trigger, all positive values)
			cursor.xSpeed = 0;
			cursor.ySpeed = 0;
			if ((Date.now() - cursor.lastTrigger) > 1000) {
				clearInterval(cInt1);
			}
		}
	}, 10);
	//Element the cursor is over
	cursor.eleOver = event.target || event.srcElement;
	try {btjs('cursor')} catch {};
}

function cursorInfo(info, element) {
	var info2 = info;
	if ((typeof info) == "string") {info2 = info.toLowerCase()};
	if (info == 0 || info2 == 'x' || info2 == 'px' || info2 == 'xp' || info2 == 'pagex') {
		return cursor.x;
	}
	else if (info == 1 || info2 == 'y' || info2 == 'py'  || info2 == 'yp' || info2 == 'pagey') {
		return cursor.y;
	}
	else if (info == 2 || info2 == 'sx' || info2 == 'scx' || info2 == 'scrx' || info2 == 'screenx' || info2 == 'xs' || info2 == 'xsc' || info2 == 'xscr' || info2 == 'xscreen') {
		return cursor.xScreen;
	}
	else if (info == 3 || info2 == 'sy' || info2 == 'scy' || info2 == 'scry' || info2 == 'screeny' || info2 == 'ys' || info2 == 'ysc' || info2 == 'yscr' || info2 == 'yscreen') {
		return cursor.yScreen;
	}
	else if (info == 4 || info2 == 'lx' || info2 == 'lastx' || info2 == 'lpx' || info2 == 'lastpagex') {
		return cursor.lastX;
	}
	else if (info == 5 || info2 == 'ly' || info2 == 'lasty' || info2 == 'lpy' || info2 == 'lastpagey') {
		return cursor.lastY;
	}
	else if (info == 6 || info2 == 'lxs' || info2 == 'lxscr' || info2 == 'lastxscr' || info2 == 'lastscreenx' || info2 == 'lsx' || info2 == 'lscrx' || info2 == 'lastscrx' || info2 == 'lastxscreen') {
		return cursor.lastScreenX;
	}
	else if (info == 7 || info2 == 'lys' || info2 == 'lyscr' || info2 == 'lastyscr' || info2 == 'lastscreeny' || info2 == 'lsy' || info2 == 'lscry' || info2 == 'lastscry' || info2 == 'lastyscreen') {
		return cursor.lastScreenY;
	}
	else if (info == 8 || info2 == 'vx' || info2 == 'velx' || info2 == 'velocityx' || info2 == 'xv' || info2 == 'xvel' || info2 == 'xvelocity') {
		return cursor.xVelocity;
	}
	else if (info == 9 || info2 == 'vy' || info2 == 'vely' || info2 == 'velocityy' || info2 == 'yv' || info2 == 'yvel' || info2 == 'yvelocity') {
		return cursor.yVelocity;
	}
	else if (info == 10 || info2 == 'spx' || info2 == 'spex' || info2 == 'speedx' || info2 == 'xsp' || info2 == 'xspe' || info2 == 'xspeed') {
		return cursor.xSpeed;
	}
	else if (info == 11 || info2 == 'spy' || info2 == 'spey' || info2 == 'speedx' || info2 == 'ysp' || info2 == 'yspe' || info2 == 'yspeed') {
		return cursor.ySpeed;
	}
	else if (info == 12 || info2 == 'eo' || info2 == 'eleover' || info2 == 'over' || info2 == 'elementover' || info2 == 'element' || info2 == 'target') {
		return cursor.eleOver;
	}
	else if (info == 13 || info2 == 'xe' || info2 == 'xele' || info2 == 'xelement' || info2 == 'ex' || info2 == 'elex' || info2 == 'elementx') {
		if (!(element == null)) {
			var ex = cursor.x;
			var ele = element;
			while (!(ele.offsetParent == null)) {
				ex -= ele.offsetLeft;
				ele = ele.offsetParent;
			}
			return ex;
		}
		else {
			return cursor.x;
		}
	}
	else if (info == 14 || info2 == 'ye' || info2 == 'yele' || info2 == 'yelement' || info2 == 'ey' || info2 == 'eley' || info2 == 'elementy') {
		if (!(element == null)) {
			var ey = cursor.y;
			var ele = element;
			while (!(ele.offsetParent == null)) {
				ey -= ele.offsetTop;
				ele = ele.offsetParent;
			}
			return ey;
		}
		else {
			return cursor.y;
		}
	}
	else {
		return null;
	}
}

// ---------- NUMBER FUNCTIONS ----------
Number.prototype.toPositive = function() {
	var n = parseFloat(this);
	if (parseFloat(this) < 0) {n = parseFloat(this) * -1};
	return n;
}

Number.prototype.toNegative = function() {
	var n = parseFloat(this);
	if (parseFloat(this) > 0) {n = parseFloat(this) * -1};
	return n;
}

function randomNumber(start, end, decimalPlaces, returnAsString) {
	if (parseInt(decimalPlaces) <= 100 && parseInt(decimalPlaces) >= 0) {
		if (returnAsString == true) {
			return ((Math.random() * (end - start)) + start).toFixed(decimalPlaces);
		}
		else {
			return parseFloat(((Math.random() * (end - start)) + start).toFixed(decimalPlaces));
		}
	}
	else if (parseInt(decimalPlaces) > 100) {
		if (returnAsString == true) {
			return ((Math.random() * (end - start)) + start).toFixed(100);
		}
		else {
			return parseFloat(((Math.random() * (end - start)) + start).toFixed(100));
		}
	}
	else {
		if (returnAsString == true) {
			return ((Math.random() * (end - start)) + start).toFixed(0);
		}
		else {
			return parseFloat(((Math.random() * (end - start)) + start).toFixed(0));
		}
	}
}

Number.prototype.round = function(decimalPlaces) {
	var n = parseFloat(this);
	if (decimalPlaces == null) {
		n = parseFloat(n.toFixed(0))
	}
	else if (decimalPlaces > 100) {
		n = parseFloat(n.toFixed(100))
	}
	else if (decimalPlaces < 0) {
		n = parseFloat(n.toFixed(0))
	}
	else {
		n = parseFloat(n.toFixed(decimalPlaces))
	}
	return n;
}

// ---------- STRING FUNCTIONS ----------
String.prototype.toProperCase = function(mode) {
	var mode2 = mode;
	if ((typeof mode) == "string") {mode2 = mode.toLowerCase()};
	if (mode == 1 || mode2 == "w" || mode2 == "word" || mode2 == "words") {
		var words = this.toString().split(" ");
		var string = "";
		for (var i=0; i < words.length; i++) {
			string = string + " " + words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
		}
		return string.slice(1);
	}
	else if (mode == 2 || mode2 == "f" || mode2 == "first" || mode2 == "firstletter") {
		return this.toString().charAt(0).toUpperCase() + this.toString().slice(1).toLowerCase();
	}
	else {
		var string1 = this.toString();
		var string = "";
		var nxID = 0;
		var times = 0;
		while (nxID > -1) {
			if (string1.indexOf(".") > -1 && string1.indexOf(".") < string1.indexOf("!") && string1.indexOf(".") < string1.indexOf("?")) {
				nxID = string1.indexOf(".");
			}
			else if (string1.indexOf("!") > -1 && string1.indexOf("!") < string1.indexOf("?")) {
				nxID = string1.indexOf("!");
			}
			else {
				nxID = string1.indexOf("?");
			}
			if (nxID <= -1) {
				break
			}
			var s1ss = string1.substring(0, nxID + 1);
			var s1ssl = s1ss.split("");
			var chg = false;
			for (var i=0; i < s1ssl.length; i++) {
				if (!(s1ssl[i] == " ") && !(s1ssl[i] == "	")) {
					string += s1ss.substring(0, i) + s1ss.charAt(i).toUpperCase() + s1ss.slice(i + 1).toLowerCase();
					chg = true;
					break
				}
			}
			if (chg == false) {
				string += s1ss.charAt(0).toUpperCase() + s1ss.slice(1).toLowerCase();
			}
			string1 = string1.substr(nxID + 1);
			times += 1;
			if (times > 1000) {
				break
			}
		}
		return string;
	}
}

// ---------- BOOLEAN FUNCTIONS ----------
Boolean.prototype.toYesNo = function() {
	if (this == true) {
		return "Yes";
	}
	else if (this == false) {
		return "No";
	}
}

// ---------- ARRAY FUNCTIONS ----------
Array.prototype.selectRandom = function() {
	return this[parseInt(Math.random() * this.length)];
}