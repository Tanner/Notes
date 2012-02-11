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
	var lastPoint = null;
	var down = false;

	var drawingPoints = [];

	// touch events
	$("body").on('touchstart mousedown', function(e) {
		if (!event.which || event.which == 1)
			down = true;
	});

	$("body").bind('touchmove mousemove', function (e) {
		if (!down)
			return;

		var touch = e.originalEvent.touches ? e.originalEvent.touches[0] : e;
		addPoint(POINT(touch.pageX, touch.pageY));

		e.preventDefault();
	});

	$("body").on('touchend mouseup mouseleave', function(e) {
		$("#layer2").clearCanvas();

		if (drawingPoints.length > 0) {
			drawBezier(drawingPoints);
			drawingPoints = [];
		}

		lastPoint = null;
		down = false;
	});

	// set canvas size
	var minSide = 748; //Math.min(window.innerWidth, window.innerHeight);
	var maxSide = 1024; //Math.max(window.innerWidth, window.innerHeight);
    $("canvas").each(function() {
	    $(this)[0].width = minSide + 20;
	    $(this)[0].height = minSide
	});

	// draw buttons
	$("#draw-nav .clear").on("click", function() {
		$("canvas").clearCanvas();
	});

	function addPoint(point) {
		if (lastPoint == null) {
			lastPoint = point;
		}

		drawingPoints[drawingPoints.length] = point;

		$("#layer2").drawLine({
			strokeStyle: "#000",
			strokeWidth: 10,
			rounded: true,
			x1: point.x, y1: point.y,
			x2: lastPoint.x, y2: lastPoint.y
		});

		lastPoint = point;
	}

	function drawBezier(points) {
		$("#layer1").draw(function(ctx) {
			ctx.fillStyle = "#000";
			ctx.lineWidth = 10;
			ctx.beginPath();
			ctx.moveTo(points[0].x, points[0].y);

			for (var i = 1; i < points.length - 2; i++) {
				var xc = (points[i].x + points[i+1].x) / 2;
				var yc = (points[i].y + points[i+1].y) / 2;
				ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
			}

			if (points[i+1])
				ctx.quadraticCurveTo(points[i].x, points[i].y, points[i+1].x, points[i+1].y);
			ctx.lineCap = "round";
			ctx.stroke();
		});
	}
});