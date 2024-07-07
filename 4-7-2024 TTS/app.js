// Get the lists and tasks containers
const toDoList = document.getElementById('to-do');
const inProgressList = document.getElementById('in-progress');
const doneList = document.getElementById('done');
const tasksContainer = document.querySelector('.tasks');

// Initialize the tasks state
let tasks = [
  { id: 1, name: 'Task 1', list: 'to-do' },
  { id: 2, name: 'Task 2', list: 'to-do' },
  { id: 3, name: 'Task 3', list: 'in-progress' },
  { id: 4, name: 'Task 4', list: 'done' },
];

// Render the tasks
tasks.forEach((task) => {
  const taskElement = document.createElement('div');
  taskElement.className = 'task';
  taskElement.draggable = true;
  taskElement.innerHTML = task.name;
  taskElement.addEventListener('dragstart', (e) => handleDragStart(e, task));
  tasksContainer.appendChild(taskElement);
});

// Handle drag start
function handleDragStart(e, task) {
  e.dataTransfer.setData('name', task.name);
  e.dataTransfer.setData('id', task.id);
}

// Handle drag over
function handleDragOver(e) {
  e.preventDefault();
}

// Handle drop
function handleDrop(e, listId) {
  const taskName = e.dataTransfer.getData('name');
  const taskId = e.dataTransfer.getData('id');
  const taskIndex = tasks.findIndex((task) => task.id === taskId);
  if (taskIndex !== -1) {
    tasks[taskIndex].list = listId;
    renderTasks();
  }
}

// Render the tasks
function renderTasks() {
  tasksContainer.innerHTML = '';
  tasks.forEach((task) => {
    const taskElement = document.createElement('div');
    taskElement.className = 'task';
    taskElement.draggable = true;
    taskElement.innerHTML = task.name;
    taskElement.addEventListener('dragstart', (e) => handleDragStart(e, task));
    tasksContainer.appendChild(taskElement);
  });
}

// Add event listeners to the lists
toDoList.addEventListener('dragover', handleDragOver);
toDoList.addEventListener('drop', (e) => handleDrop(e, 'to-do'));
inProgressList.addEventListener('dragover', handleDragOver);
inProgressList.addEventListener('drop', (e) => handleDrop(e, 'in-progress'));
doneList.addEventListener('dragover', handleDragOver);
doneList.addEventListener('drop', (e) => handleDrop(e, 'done'));