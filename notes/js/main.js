$(document).ready(function() {
	$("#outline li").on('touchstart', function() {
		selectRow($(this));
		$(this).children("input").focus();
	});

	$("#outline li input").focus(function() {
		selectRow($(this).parents("li"));
	});

	$("#outline li input").blur(function() {
		deselectRow($(this).parents("li"));
	});

	$("#outline li .btn-delete").click(function() {
		deleteRow($(this));
	});
})

function selectRow(row) {
	row.children(".btn-group").removeClass("hidden");
	row.siblings().children(".btn-group").addClass("hidden");
}

function deselectRow(row) {
	row.children(".btn-group").addClass("hidden");
}

function deleteRow(row) {
	var listItem = row.parents("li");

	var next = listItem.next();

	if (next.length >= 1) {
		selectRow(next.eq(0));
	} else {
		var previous = listItem.prev();

		if (previous.length >= 1) {
			selectRow(previous.eq(0));
		}
	}

	listItem.remove()
}