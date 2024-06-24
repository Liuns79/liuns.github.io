document.onkeydown = function() {

	//keycode 123 = F12
	if (window.event && window.event.keyCode == 123) {
		//如果这个键不能被标志，这个值为 0。
		event.keyCode = 0;
		event.returnValue = false;
	}
	//keyCode 13 = Enter
	if (window.event && window.event.keyCode == 13) {
		window.event.keyCode = 505;
	}
	if (window.event && window.event.keyCode == 8) {
		alert(str + "\n请使用Del键进行字符的删除操作！");
		window.event.returnValue = false;
	}

}

var h = window.innerHeight,
	w = window.innerWidth;
window.onresize = function() {
	if (h != window.innerHeight || w != window.innerWidth) {
		window.close();
		window.location = "about:blank";
	}
}

document.oncontextmenu = function(event) {
	if (window.event) {


		event = window.event;
	}
	try {
		var the = event.srcElement;
		if (!((the.tagName == "INPUT" && the.type.toLowerCase() == "text") || the.tagName == "TEXTAREA")) {
			return false;
		}
		return true;
	} catch (e) {
		return false;
	}
}

document.oncopy = function(event) {
	if (window.event) {


		event = window.event;
	}
	try {
		var the = event.srcElement;
		if (!((the.tagName == "INPUT" && the.type.toLowerCase() == "text") || the.tagName == "TEXTAREA")) {
			return false;
		}
		return true;
	} catch (e) {
		return false;
	}
}

document.oncut = function(event) {
	if (window.event) {
		event = window.event;
	}
	try {
		var the = event.srcElement;
		if (!((the.tagName == "INPUT" && the.type.toLowerCase() == "text") || the.tagName == "TEXTAREA")) {
			return false;
		}
		return true;
	} catch (e) {
		return false;
	}
}

document.onselectstart = function(event) {
	if (window.event) {
		event = window.event;
	}
	try {
		var the = event.srcElement;
		if (!((the.tagName == "INPUT" && the.type.toLowerCase() == "text") || the.tagName == "TEXTAREA")) {
			return false;
		}
		return true;
	} catch (e) {
		return false;
	}
}