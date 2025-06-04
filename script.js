// Load tasks when the page loads
window.onload = function () {
  loadTasks();
};

// Add a task
function addTask() {
  const input = document.getElementById("task-input");
  const taskText = input.value.trim();
  if (taskText === "") return;

  const task = {
    text: taskText,
    completed: false
  };

  const tasks = getTasks();
  tasks.push(task);
  saveTasks(tasks);
  renderTasks();

  input.value = "";
}

// Toggle task completed
function toggleDone(index) {
  const tasks = getTasks();
  tasks[index].completed = !tasks[index].completed;
  saveTasks(tasks);
  renderTasks();
}

// Remove task
function removeTask(index) {
  const tasks = getTasks();
  tasks.splice(index, 1);
  saveTasks(tasks);
  renderTasks();
}

// Get tasks from localStorage
function getTasks() {
  return JSON.parse(localStorage.getItem("tasks")) || [];
}

// Save tasks to localStorage
function saveTasks(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Render tasks on screen
function renderTasks() {
  const taskList = document.getElementById("task-list");
  taskList.innerHTML = "";

  const tasks = getTasks();
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span onclick="toggleDone(${index})" class="${task.completed ? 'completed' : ''}">${task.text}</span>
      <button onclick="removeTask(${index})">❌</button>
    `;
    taskList.appendChild(li);
  });
}

// Allow pressing Enter to add task
document.getElementById("task-input").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});
function loadTasks() {
  renderTasks();
}
