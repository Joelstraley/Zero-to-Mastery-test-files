var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var liEl = document.querySelectorAll("li")

console.log(liEl)



function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
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

function addToggleClass(liEl) {
	liEl.forEach(i => {
	if (liEl.classList.contains(done)){
		liEl.classList.remove("done")
	} else {
		liEl.classList.add("done");
	}})
}



/* 2. Add buttons next to each list item to delete the item when clicked on its corresponding delete button.

3. BONUS: When adding a new list item, it automatically adds the delete button next to it 
(hint: be sure to check if new items are clickable too!) */


liEl.addEventListener("click", addToggleClass);

document.querySelectorAll('.some-class').forEach(item => {
	item.addEventListener('click', event => {
	  //handle click
	})
  })

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);