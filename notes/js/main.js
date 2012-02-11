$(document).ready(function() {
	$("#outline li").click(selectRow);
	$("#outline li .btn-delete").click(deleteRow);
})

function selectRow() {
	$(this).children(".btn-group").removeClass("hidden");
	$(this).siblings().children(".btn-group").addClass("hidden");
}

function deleteRow() {
	$(this).parents("li").remove()
}