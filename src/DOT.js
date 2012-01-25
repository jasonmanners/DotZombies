
//Define animation function
var requestAnimationFrame = window.requestAnimationFrame        || 
                            window.webkitRequestAnimationFrame  || 
                            window.mozRequestAnimationFrame     || 
                            window.oRequestAnimationFrame       || 
                            window.msRequestAnimationFrame      || 
                            function(/* function */ callback) {
                              window.setTimeout(callback, 1000 / 60);
                            };

var DOT = {
	
};