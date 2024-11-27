import './style.css'

interface Todo {
  title : string, 
  isCompleted : boolean, 
  readonly id : string
}

const todos : Todo[] = [];

const todoContainer = document.querySelector(".todoContainer") as HTMLDivElement;

const todoInput = document.getElementsByTagName("input")[0] as HTMLInputElement;

const myForm = document.getElementById("myform") as HTMLFormElement;

myForm.onsubmit = async (e: SubmitEvent) => {
  e.preventDefault();

  const todo: Todo = {
    title: todoInput.value , 
    isCompleted: false, 
    id : String(Math.floor( Math.random()*234545)*10000000 * 1515 + Math.floor(Math.random()*1000))
  }

  todos.push(todo);
  todoInput.value = "";
  console.log(todos);
  renderTodo(todos);
  
}

const deleteTodo = (id: string) => {
  const idx = todos.findIndex(item => item.id === id)
  todos.splice(idx, 1)
  renderTodo(todos)
}

const generateTodos = async (title: string, isCompleted: boolean, id: string) => {
  const todo: HTMLDivElement = document.createElement("div")
  todo.className = "todo"


  // checkbox
  const checkBox: HTMLInputElement = document.createElement("input")
  checkBox.setAttribute("type", "checkbox")
  checkBox.className = "isCompleted"
  checkBox.checked = isCompleted ;

  checkBox.onchange = async () => {
    todos.find((item)=> {
      if(item.id === id) item.isCompleted = checkBox.checked;
    })
    paragraph.className = checkBox.checked ? "textCut" : "";
  }

  // title
  const paragraph: HTMLParagraphElement = document.createElement("p")
  paragraph.innerText = title
  paragraph.className = isCompleted ? "textCut" : ""

  const btn: HTMLButtonElement = document.createElement("button")
  btn.innerText = 'x'
  btn.className = "deleteBtn"
  btn.onclick = () => {
    deleteTodo(id) ;
  }

  // Appending all to todo 
  todo.append(checkBox, paragraph, btn);

  todoContainer.append(todo);


}

const renderTodo = async (todos: Todo[]) => {
  todoContainer.innerText= "";
  todos.forEach((item)=> {
    generateTodos(item.title, item.isCompleted, item.id);
  })
}