const taskInput =
document.getElementById("taskInput");
const addBtn =
document.getElementById("addBtn");
const tasklist =
document.getElementById("taskList");

let tasks = []; // store tasks

addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", 
function(e) {
    if (e.key === "Enter") {
        addTask();
    }
});

function addTask() {
    const taskText =
taskInput.ariaValueMax.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const task = {
        id: Date.now(),
        text: taskText,
        completed: false
    };

    tasks.push(task);
    renderTasks();
    taskInput.value = "";
}

function renderTasks() {
    tasklist.innerHTML ="";

    tasks.forEach(task => {
        const li =
document.createElement("li");
     
        li.textcontent = task.text;

        if (task.completed) {
            li.classList.add("completed");
        }

        // Complete toggle
        li.addEventListener("click", () =>
{
           task.completed = !
task.completed;
            renderTasks();
        });

        // Delete button
        const deleteBtn =
document.createElement("button");
        deleteBtn.textContent = "X";

deleteBtn.addEventListener("click", (e) =>
{
          e.stopPropagation(); // 
prevent toggle
          tasks = tasks.filter(t =>
t.id !== task.id);
           renderTasks();
        });

        li.appendChild(deleteBtn);
        tasklist.appendChild(li);
    });
}