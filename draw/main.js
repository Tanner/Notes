$(document).ready(function(){
    init();
});

var POINT = (function(x, y) {
	var my = {};

	my.x = x;
	my.y = y;

	my.inside = function(el) {
		if (my.x >= el.offset().left && my.x <= el.offset().left + el.outerWidth()
			&& my.y >= el.offset().top && my.y <= el.offset().top + el.outerHeight())
			return true;

		return false;
	}

	return my;
});

init = (function() {
	var lastPoint = null;
	var down = false;

	var drawingPoints = [];

	// touch events
	$("canvas").on('touchstart', function(e) {
		if (!e.which || e.which == 1) {
			down = true;

			var touch = e.originalEvent.touches ? e.originalEvent.touches[0] : e;
			addPoint(POINT(touch.pageX, touch.pageY));
		}
	});

	$("body").bind('touchmove', function (e) {
		e.preventDefault();

		if (!down)
			return;
		
		var touch = e.originalEvent.touches ? e.originalEvent.touches[0] : e;
		addPoint(POINT(touch.pageX, touch.pageY));
	});

	$("body").on('touchend', function(e) {
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
	    $(this)[0].height = minSide;
	});

	// draw buttons
	$("#draw-nav li.clear").on("touchend mouseup", function(e) {
		if ($(this).hasClass('select'))
			$("canvas").clearCanvas();
	});

	$("#draw-nav li").on("touchstart mousedown", function(e) {
		$(this).addClass('select');
	});

	$("#draw-nav li").on("touchmove", function(e) {
		var touch = (e.originalEvent.touches && e.originalEvent.touches.length > 0) ? e.originalEvent.touches[0] : e;
		if (!POINT(touch.pageX, touch.pageY).inside($(this)))
			$(this).removeClass('select');
	});

	$("#draw-nav li").on("mouseleave", function(e) {
		$(this).removeClass('select');
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
		if (points.length > 1) {
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

				ctx.quadraticCurveTo(points[i].x, points[i].y, points[i+1].x, points[i+1].y);
				ctx.lineCap = "round";
				ctx.stroke();
			});
		} else if (points.length == 1) {
			$("#layer1").draw(function(ctx) {
				ctx.fillStyle = "#000";
				ctx.beginPath();
				ctx.arc(points[0].x, points[0].y, 5, 0, 2 * Math.PI, false);
				ctx.fill();
			});
		}
	}
});