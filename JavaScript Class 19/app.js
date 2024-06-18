// function addTodo() {
//   var list = document.getElementById("list");
//   var todo = document.getElementById("todo");

//   list.innerHTML = `
//     <li>
//      <input class="todo-input" type ="text" value= "${todo.value}" disabled />
//     <button onclick='delTodo(this)'>Delete</button>
//     <button onclick='editTodo(this) '>Edit</button>
// </li>`;
// todo.value = "";
// }


// function editTodo(e) {
//   if (e.innerText == "Edit") {
//     e.innerText = "Save";
//     todoInput.disabled = false;

//     // var todoInput = e.parentNode.children[0];
//     // todoInput.disabled = !todoInput.disabled;
//   } else {
//     e.innerText = "Edit";
//     todoInput.disabled = true;
//     // var todoInput = e.parentNode.children[0];
//     // todoInput.disabled = !todoInput.disabled;
//   }
// }

// function deletedAll(e) {
//   var list = document.getElementById("list");
//   list.innerHTML = "";
// }

// function delTodo(e) {
//   event.target.parentNode.remove();
// }
