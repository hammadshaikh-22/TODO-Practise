var todo = document.getElementById("todo")
var input = document.getElementById("input")
var update = document.getElementById("update")
var submitbtn = document.getElementById("submit")
var deleteAllBtn = document.getElementById("deleteAll")
var deleteSelect = document.getElementById("deleteSelect")

var selectlist = null
var editStatus =false


function submit() {
	
	
	var deleteAllStatus = false
	
	if (input.value == "") {
		return null

	}

	var inputBtn = document.createElement("input")
	inputBtn.setAttribute("onclick","inputSelect()")
	inputBtn.setAttribute("class","form-check-input")
	inputBtn.type = "checkbox"

	var liTag = document.createElement("li") // tag new
	liTag.setAttribute("class","list-group-item list-group-item-secondary")

	//b tag create for store data 
	var bTag = document.createElement("b")
	bTag.innerText = input.value
	bTag.style.marginTop = "20px"

	//button edit
	var editButton = document.createElement("button")
	editButton.innerText = "EDIT"
	editButton.setAttribute("onclick", "editTodo(this)")
	editButton.setAttribute("class","btn btn-warning")

	var deleteButton = document.createElement("button")
	deleteButton.innerText = "DELETE"
	deleteButton.style.marginLeft = "20px"
	deleteButton.setAttribute("onclick", "deleteTodo(this)")
	deleteButton.setAttribute("class","btn btn-danger")



	//    store b i li tag
	liTag.append(inputBtn)
	liTag.appendChild(bTag)
	liTag.appendChild(editButton)
	liTag.appendChild(deleteButton)

	//    li tag store in main todo
	todo.appendChild(liTag)
	input.value = ""

	if(deleteAllStatus == false && todo.childNodes.length>1){
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
	input.value = e.parentNode.childNodes[1].innerText
	submitbtn.style.display = "none"
	update.style.display = "inline"
	selectlist = e.parentNode
	editStatus = true
	input.focus()

}

function updatebtn() {
	if (input.value == "") {
		return null

	}
	selectlist.childNodes[1].innerText = input.value
	update.style.display = "none"
	submitbtn.style.display = "inline"
	input.value = ""
	editStatus=false

}
function deleteAll(){
	todo.innerHTML = ""
	deleteAllBtn.style.display = "none"
	deleteAllStatus=true
}
function deleteSelected(){
	for(var i = 0; i<todo.childNodes.length; i++){
		//console.log(todo.childNodes[i].childNodes[0].checked)
		if(todo.childNodes[i].childNodes[0].checked == true){
			todo.childNodes[i].remove()
			i--
		}
	}
	deleteSelect.style.display="none"
	selectStatus=false
	
}
function inputSelect(){
	var selectStatus = false
	for(var i = 0; i<todo.childNodes.length; i++){
		//console.log(todo.childNodes[i].childNodes[0].checked)
		if(todo.childNodes[i].childNodes[0].checked){
			selectStatus = true
		}
	}
	if(selectStatus==true){
		deleteSelect.style.display ="inline"
	}
	else{
		deleteSelect.style.display ="none"
	}
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
