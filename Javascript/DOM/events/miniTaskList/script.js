var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var deleteButton = document.createElement("button");
	var div = document.createElement("div");

	li.classList.add("taskClass");
	div.classList.add("wrapper");
	deleteButton.classList.add("delClass");

	ul.appendChild(div);
	div.append(li, deleteButton);

	li.appendChild(document.createTextNode(input.value));
	deleteButton.appendChild(document.createTextNode("delete"));


	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

// TAGNAME IS ALL CAPS
function doneTask(task) {
	if (task.target.tagName === "LI") {
		task.target.classList.toggle("done");
	}
}

function deleteListElement(element) {
	if (element.target.className === "delClass") {
		element.target.parentElement.remove();
	}
}

function handleUIClick(element) {
	doneTask(element);
	deleteListElement(element);
}


ul.addEventListener("click", handleUIClick);

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);