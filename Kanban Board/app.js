document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".task-list").forEach(column => {
        column.ondragover = e => e.preventDefault();
        column.ondrop = e => {
            e.preventDefault();
            column.appendChild(document.getElementById(e.dataTransfer.getData("text")));
            saveBoard();
        };
    });
    loadBoard();
});

function addTask(columnId) {
    const taskText = prompt("Enter task description:");
    if (taskText) {
        document.getElementById(columnId).querySelector(".task-list").appendChild(createTask(taskText));
        saveBoard();
    }
}

function createTask(text) {
    const task = document.createElement("div");
    task.className = "task";
    task.draggable = true;
    task.id = `task-${Date.now()}`;
    task.innerText = text;
    task.ondragstart = e => e.dataTransfer.setData("text", task.id);
    task.ondblclick = () => {
        const newText = prompt("Edit task description:", task.innerText);
        if (newText) {
            task.innerText = newText;
            saveBoard();
        }
    };
    return task;
}

function saveBoard() {
    const board = Array.from(document.querySelectorAll(".task-list")).reduce((acc, column) => {
        acc[column.parentElement.id] = Array.from(column.children).map(task => task.innerText);
        return acc;
    }, {});
    localStorage.setItem("kanbanBoard", JSON.stringify(board));
}

function loadBoard() {
    const board = JSON.parse(localStorage.getItem("kanbanBoard")) || {};
    Object.entries(board).forEach(([columnId, tasks]) => {
        const column = document.getElementById(columnId).querySelector(".task-list");
        tasks.forEach(taskText => column.appendChild(createTask(taskText)));
    });
}
