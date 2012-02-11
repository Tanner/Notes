var deleteButtonClick = false;

$(document).ready(function() {
	$("#outline li").on('touchstart', function() {
		selectRow($(this));
		$(this).children("input").focus();
	});

	$("#outline li input").focus(function() {
		selectRow($(this).parents("li"));
	});

	$("#outline li input").blur(function() {
		if (deleteButtonClick) {
			deleteButtonClick = false
			return;
		}

		deselectRow($(this).parents("li"));
	});

	$("#outline li .btn-delete").click(function() {
		deleteRow($(this));
		deleteButtonClick = false
	})

	$("#outline li .btn-delete").mousedown(function() {
		deleteButtonClick = true;
	});
})

function selectRow(row) {
	row.children(".btn-group").removeClass("hidden");
	row.children("input").addClass("focus");

	row.siblings().children(".btn-group").addClass("hidden");
	row.siblings().children("input").removeClass("focus");
}

function deselectRow(row) {
	row.children(".btn-group").addClass("hidden");
	row.children("input").removeClass("focus");
}

function deleteRow(row) {
	var listItem = row.parents("li");

	var next = listItem.next();

	if (next.length >= 1) {
		next.eq(0).children("input").focus();
	} else {
		var previous = listItem.prev();

		if (previous.length >= 1) {
			previous.eq(0).children("input").focus();
		}
	}

	listItem.remove()
}