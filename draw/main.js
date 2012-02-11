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

	var down = false;

	// touch events
	$("body").on('touchstart mousedown', function(e) {
		down = true;
	});

	$("body").bind('touchmove mousemove', function (e) {
		if (!down) {
			return;
		}

		var touch = e.originalEvent.touches ? e.originalEvent.touches[0] : e;
		addPoint(touch.pageX, touch.pageY);

		e.preventDefault();
	});

	$("body").on('touchend mouseup', function(e) {
		lastX = null;
		lastY = null;

		down = false;
	});

	// handle resizing
    function resizeCanvas() {
        $("#canvas")[0].width = Math.max(window.innerWidth, window.innerHeight);
        $("#canvas")[0].height = Math.max(window.innerWidth, window.innerHeight);
    };
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