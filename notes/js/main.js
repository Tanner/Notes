$(document).ready(function() {
	$("#outline li").click(function() {
		selectRow($(this));
	});

	$("#outline li .btn-delete").click(deleteRow);
})

function selectRow(row) {
	row.children(".btn-group").removeClass("hidden");
	row.siblings().children(".btn-group").addClass("hidden");
}

function deleteRow() {
	var next = $(this).parents("li").next();

	if (next.length >= 1) {
		selectRow(next.eq(0));
	} else {
		var previous = $(this).parents("li").prev();

		if (previous.length >= 1) {
			selectRow(previous.eq(0));
		}
	}

	$(this).parents("li").remove()
}