const toDoform = document.querySelector(".js-toDoForm"),
	  toDoinput = toDoform.querySelector("input"),
	  toDoList = form.querySelector(".js-toDoList")

const TODOS_LS = 'toDos';
const toDos = [];

function saveToDos(){
	localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}


function paintToDo(text){
	console.log(text)
	const li = document.createElement("li");

	const delBtn = document.createElement("button")
	
	const newId = toDos.length +1;
	
	delBtn.value = "❤";
	const span = document.createElement("span")
	span.innderText = text;
	li.appendChild(span);
	li.appendChild(delBtn);
	
	li.id = newId;
	const toDoObj = {
		text: text,
		id : toDos.length + 1 
	};
	toDos.push(toDoObj);
	saveToDos()
}

function handleSubmit(event){
	event.preventDefault();
	const currentValue = toDoInput.value;
	paintToDo(currentValue)
}

function loadToDos(){
	const toDos = localStorage.getItem(TODOS_LS)
	
	if(toDos===null){
		const parsedToDos = JSON.parse(loadedToDos);
		parsedToDos.forEach(function(toDo){
			paintToDo(toDo.text);
		})
	}else{
		
	}
}

function init(){
	loadToDos();
	toDoForm.addEventListener("submit",handleSubmit)
}

init();