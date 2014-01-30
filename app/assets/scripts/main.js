'use strict';

if(Modernizr.canvas) {
	console.log('CANVAS: =)');
} else {
	console.log('CANVAS: =(');
}

if(Modernizr.canvastext) {
	console.log('CANVAS TEXT: =)');
} else {
	console.log('CANVAS TEXT: =(');
}

if(Modernizr.video) {
	console.log('VIDEO: =)');
	if(Modernizr.video.webm) {
		console.log('_WebM: =)');
	} else if(Modernizr.video.ogg) {
		console.log('_Ogg: =)');
	} else if(Modernizr.video.h264) {
		console.log('_H264: =)');
	}
} else {
	console.log('VIDEO: =(');
}

if(Modernizr.localstorage) {
	console.log('LOCAL STORAGE: =)');
} else {
	console.log('LOCAL STORAGE: =(');
}

if(Modernizr.webworkers) {
	console.log('WEB WORKERS: =)');
} else {
	console.log('WEB WORKERS: =(');
}

if(Modernizr.applicationcache) {
	console.log('APPLICATION CACHE: =)');
} else {
	console.log('APPLICATION CACHE: =(');
}

if(Modernizr.geolocation) {
	console.log('GEOLOCATION: =)');
} else {
	console.log('GEOLOCATION: =(');
}

if(Modernizr.inputtypes.search) {
	console.log('INPUT TYPE SEARCH: =)');
} else {
	console.log('INPUT TYPE SEARCH: =(');
}

if(Modernizr.inputtypes.number) {
	console.log('INPUT TYPE NUMBER: =)');
} else {
	console.log('INPUT TYPE NUMBER: =(');
}

if(Modernizr.inputtypes.range) {
	console.log('INPUT TYPE RANGE: =)');
} else {
	console.log('INPUT TYPE RANGE: =(');
}

if(Modernizr.inputtypes.color) {
	console.log('INPUT TYPE COLOR: =)');
} else {
	console.log('INPUT TYPE COLOR: =(');
}

if(Modernizr.inputtypes.tel) {
	console.log('INPUT TYPE TELEPHONE: =)');
} else {
	console.log('INPUT TYPE TELEPHONE: =(');
}

if(Modernizr.inputtypes.url) {
	console.log('INPUT TYPE URL: =)');
} else {
	console.log('INPUT TYPE URL: =(');
}

if(Modernizr.inputtypes.email) {
	console.log('INPUT TYPE EMAIL: =)');
} else {
	console.log('INPUT TYPE EMAIL: =(');
}

if(Modernizr.inputtypes.date) {
	console.log('INPUT TYPE DATE: =)');
} else {
	console.log('INPUT TYPE DATE: =(');
}

if(Modernizr.inputtypes.month) {
	console.log('INPUT TYPE MONTH: =)');
} else {
	console.log('INPUT TYPE MONTH: =(');
}

if(Modernizr.inputtypes.week) {
	console.log('INPUT TYPE WEEK: =)');
} else {
	console.log('INPUT TYPE WEEK: =(');
}

if(Modernizr.inputtypes.time) {
	console.log('INPUT TYPE TIME: =)');
} else {
	console.log('INPUT TYPE TIME: =(');
}

if(Modernizr.inputtypes.datatime) {
	console.log('INPUT TYPE DATA-TIME: =)');
} else {
	console.log('INPUT TYPE DATA-TIME: =(');
}

if(Modernizr.inputtypes.datatimelocal) {
	console.log('INPUT TYPE DATE-TIME-LOCAL: =)');
} else {
	console.log('INPUT TYPE DATE-TIME-LOCAL: =(');
}

if(Modernizr.input.placeholder) {
	console.log('INPUT PLACEHOLDER: =)');
} else {
	console.log('INPUT PLACEHOLDER: =(');
}

if(Modernizr.input.autofocus) {
	console.log('INPUT AUTOFOCUS: =)');
} else {
	console.log('INPUT AUTOFOCUS: =(');
}

if(Modernizr.microdata) {
	console.log('MICRODATA: =)');
} else {
	console.log('MICRODATA: =(');
}

if(Modernizr.history) {
	console.log('HISTORY: =)');
} else {
	console.log('HISTORY: =(');
}









