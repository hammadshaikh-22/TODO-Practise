var todo = document.getElementById("todo")
var input = document.getElementById("input")
var update = document.getElementById("update")
var submitbtn = document.getElementById("submit")
var deleteAllBtn = document.getElementById("deleteAll")
var selectlist = null
var editStatus =false

function submit() {
	var deleteAllStatus = false
	if (input.value == "") {
		return null

	}
	var liTag = document.createElement("li") // tag new

	//b tag create for store data 
	var bTag = document.createElement("b")
	bTag.innerText = input.value
	bTag.style.marginTop = "20px"

	//button edit
	var editButton = document.createElement("button")
	editButton.innerText = "EDIT"
	editButton.setAttribute("onclick", "editTodo(this)")

	var deleteButton = document.createElement("button")
	deleteButton.innerText = "DELETE"
	deleteButton.style.marginLeft = "20px"
	deleteButton.setAttribute("onclick", "deleteTodo(this)")



	//    store b i li tag
	liTag.appendChild(bTag)
	liTag.appendChild(editButton)
	liTag.appendChild(deleteButton)

	//    li tag store in main todo
	todo.appendChild(liTag)
	input.value = ""

	if(deleteAllStatus == false){
		deleteAllBtn.style.display = "inline"
	}

}
// = =>assign
// ==>equal value
// ==equal value or data type


function deleteTodo(e) {
	console.log(e.parentNode.childNodes)

	e.parentNode.remove()
}

function editTodo(e) {
	// console.log(e.parentNode.childNodes[0])
	input.value = e.parentNode.childNodes[0].innerText
	submitbtn.style.display = "none"
	update.style.display = "inline"
	selectlist = e.parentNode
	editStatus = true
	input.focus()

}

function updatebtn() {
	selectlist.childNodes[0].innerText = input.value
	update.style.display = "none"
	submitbtn.style.display = "inline"
	input.value = ""

}
function deleteAll(){
	//todo.innerHTML = ""
	//deleteAllBtn.style.display = "none"
	//deleteAllStatus=true
}

document.addEventListener("keydown", function (e) {
	if (e.key == "Enter") {
		if(editStatus == true){
			updatebtn()
		}
		else{
			submit()
		}
	}
})
