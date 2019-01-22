itemListUl = document.getElementById("list");
var count = itemListUl.childElementCount;
var inputBox = document.getElementById('inputBox');
inputBox.addEventListener("keydown", keyDown, true);
function keyDown(event){
	if(event.keyCode === 13){
		var format = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
		if(inputBox.value.length < 1 || inputBox.value[0] == " " || !(isNaN(inputBox.value)) || inputBox.value.match(format)){
			alert('Enter Proper Input')
		}else{
			insertToDoList(inputBox.value);
		}
	}
}

function insertToDoList(toDoItem){
	var inputBox = document.getElementById('inputBox');
	inputBox.value = null;
	
	itemListUl = document.getElementById("list");

	newList = document.createElement("LI");
	
	newCheckbox = document.createElement("INPUT");
	newCheckbox.type = "checkbox";
	newCheckbox.id = "checkbox" + count;
	
	newLabel = document.createElement("LABEL");
	newLabel.appendChild(document.createTextNode(toDoItem));
	
	newDelete = document.createElement("A");
	newDelete.innerHTML = "Delete";
	newDelete.href = "#";
	newDelete.className = "delete";
	newDelete.id = "delete"+ count;

	
	newList.appendChild(newCheckbox);
	newList.appendChild(newLabel);
	newList.appendChild(newDelete);
	
	itemListUl.appendChild(newList);
count++;
}

document.getElementById('list').addEventListener("click", assignListener, true)   
function assignListener(){
	if(event.target.type == "checkbox"){
		var checkboxId = event.target.id;
		checkboxFunc(checkboxId);
	}else if(event.target.classList.contains("delete")){
		var deleteId = event.target.id;
		deleteFunc(deleteId);
	}
	
}

function checkboxFunc (id) {
	var checkBox = document.getElementById(id);
	var label = checkBox.nextSibling;
	if(checkBox.checked){
		label.classList.add('labelStyle');
	}else{
		label.classList.remove('labelStyle');
	}
}

function deleteFunc (id) {
	var deleteList = document.getElementById(id);
	deleteList.parentNode.parentNode.removeChild(deleteList.parentNode);
}

document.getElementById('clear').addEventListener("click", remove, true);
function remove() {
	var l = document.childNodes.length;
	console.log(l);
	while(l>0){
		var i = document.childNodes[0];
		console.log(i)
		document.removeChild(i);
		l--;
	}
}
