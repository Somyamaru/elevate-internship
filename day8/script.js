const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

let tasks = [];

function addTask() {
  const taskText = input.value.trim(); // remove extra spaces

  // Validation
  if (taskText === "") {
    alert("Task cannot be empty!");
    return;
  }

  // Store in array
  tasks.push({ text: taskText, completed: false });
  console.log("Tasks Array:", tasks);

  renderTasks();
  input.value = "";
}

// Button click
addBtn.addEventListener("click", addTask);

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

// Render UI
function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li"); // safer DOM creation
    li.textContent = task.text;

    if (task.completed) {
      li.classList.add("completed");
    }
    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.classList.add("delete-btn");
    delBtn.setAttribute("data-index", index);

    li.appendChild(delBtn);
    taskList.appendChild(li);
  });
}

// Event delegation (complete + delete)
taskList.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-btn")) {
    const index = e.target.getAttribute("data-index");
    tasks.splice(index, 1);
    renderTasks();
  }

  // Complete
  if (e.target.tagName === "LI") {
    const index = [...taskList.children].indexOf(e.target);
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
  }
});
