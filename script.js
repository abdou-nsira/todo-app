function addTask() {
  const input = document.getElementById("task-input");
  const taskText = input.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
    <span onclick="toggleDone(this)">${taskText}</span>
    <button onclick="removeTask(this)">❌</button>
  `;
  document.getElementById("task-list").appendChild(li);
  input.value = "";
}

function toggleDone(span) {
  span.classList.toggle("completed");
}

function removeTask(button) {
  button.parentElement.remove();
}
