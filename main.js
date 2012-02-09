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
	var layers = new Array();
	layers[0] = new Array();

	// touch events
	$("body").on('touchstart', function(e) {
	});

	$("body").bind('touchmove', function (e) {
		var touch = e.originalEvent.touches[0];
		addPoint(touch.pageX, touch.pageY);

		e.preventDefault();
	});

	$("body").on('touchend', function(e) {
		layers[layers.length] = new Array();
	});

	// handle resizing
	$(window).resize(resizeCanvas());
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        render(); 
    }
    resizeCanvas();

	function addPoint(x, y) {
		var point = POINT(x, y);
		layers[layers.length-1][layers[layers.length-1].length] = point;
	}

	// rendering
	setInterval(function() { render() }, 10);
	function render() {
		for (l in layers) {
			for (var i = 0; i < layers[l].length-1; i++) {
				$("#canvas").drawLine({
					strokeStyle: "#000",
					strokeWidth: 10,
					rounded: true,
					x1: layers[l][i].x, y1: layers[l][i].y,
					x2: layers[l][i+1].x, y2: layers[l][i+1].y
				})
			}
		}
	}
});