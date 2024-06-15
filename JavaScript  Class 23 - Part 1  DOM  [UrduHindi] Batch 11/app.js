
// var todo = document.getElementById("todo");

// function addTodo() {
//   var list = document.getElementById("list");

//   list.innerHTML += `<li>  
  
//  <input type="text" value='${todo.value}' disabled /> 
  
//   <button onclick="deleteTodo(event)"> Delete </button> 
//   <button onclick="editTodo(event)"> Edit </button> 
//   <li/>`;
//   todo.value = "";
// }

// function addTodoEnter(event) {
//   if (event.keyCode === 13) {
//     addTodo();
//     event.preventDefault();
//   }
// }
// function deleteTodo(event) {
//   console.log(event);
//   event.target.parentNode.remove();
// }

// function editTodo(event) {
//   var input = event.target.parentNode.childNodes[1];

//   input.disabled = false;
//   input.focus();
//   event.target.innerHTML = "Update";
//   event.target.setAttribute("onclick", "updateTodo(event)");
// }

// function updateTodo(event) {
//   var input = event.target.parentNode.childNodes[1];
//   input.disabled = true;
//   event.target.innerHTML = "Edit";
//   event.target.setAttribute("onclick", "editTodo(event)");
// }

// function deletedAll() {
//   list.innerHTML = "";
// }
