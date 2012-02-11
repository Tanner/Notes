const ROW = '<li class="new"> \
				<input type="text" placeholder="Type your text here..."> \
				<div class="btn-group hidden"> \
					<a href="#" class="btn btn-small"><i class="icon-pencil"></i> Draw</a> \
					<a href="#" class="btn btn-small btn-danger btn-delete"><i class="icon-trash icon-white"></i></a> \
				</div> \
			</li>';

var deleteButtonClick = false;
var currentRow = null;

$(document).ready(function() {
	$("#outline li").live('touchstart', function() {
		selectRow($(this));
		$(this).children("input").focus();
	});

	$("#outline li input").live('focus', function() {
		selectRow($(this).parents("li"));
	});

	$("#outline li input").live('blur', function() {
		if (deleteButtonClick) {
			deleteButtonClick = false
			return;
		}

		deselectRow($(this).parents("li"));
	});

	$("#outline li input").live('keydown', function(event) {
		if (event.keyCode == 13) {
			addNewRowAfter();
		} else if (event.keyCode == 9) {
			indentRow();
		}
	});

	$("#outline li .btn-delete").live({
		click: function() {
			deleteRow($(this));
			deleteButtonClick = false
		},
		mousedown: function() {
			deleteButtonClick = true;
		}
	});
});	

function selectRow(row) {
	row.children(".btn-group").removeClass("hidden");
	row.children("input").addClass("focus");

	currentRow = row;

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

function addNewRowAfter() {
	if (!currentRow) {
		return;
	}

	currentRow.after(ROW);

	$("#outline li.new").removeClass("new").children("input").focus();
}

function indentRow() {
	currentRow.wrap("<ul>");
	selectRow(currentRow);
}