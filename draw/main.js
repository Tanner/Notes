$(document).ready(function(){
    init();
});

var POINT = (function(x, y) {
	var my = {};

	my.x = x;
	my.y = y;

	return my;
});

init = (function() {
	var lastX = null;
	var laxtY = null;

	// touch events
	$("body").on('touchstart', function(e) {
	});

	$("body").bind('touchmove', function (e) {
		var touch = e.originalEvent.touches[0];
		addPoint(touch.pageX, touch.pageY);

		e.preventDefault();
	});

	$("body").on('touchend', function(e) {
		lastX = null;
		lastY = null;
	});

	// handle resizing
	$(window).resize(resizeCanvas());
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();

	function addPoint(x, y) {
		if (lastX == null || lastY == null) {
			lastX = x;
			lastY = y;
		}

		$("#canvas").drawLine({
			strokeStyle: "#000",
			strokeWidth: 10,
			rounded: true,
			x1: x, y1: y,
			x2: lastX, y2: lastY
		});

		lastX = x;
		lastY = y;
	}
});