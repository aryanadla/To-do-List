// Function to save tasks in localStorage
function saveTasks() {
    const tasks = [];
    document.querySelectorAll("li").forEach(item => {
        const taskText = item.querySelector("a").textContent;
        const taskStartTime = item.querySelector(".start-time").textContent;
        const taskEndTime = item.querySelector(".end-time").textContent;
        const task = {
            text: taskText,
            startTime: taskStartTime,
            endTime: taskEndTime,
            completed: false
        };
        tasks.push(task);
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load tasks from localStorage when page is loaded
window.onload = function () {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
        const tasksArray = JSON.parse(savedTasks);
        tasksArray.forEach(task => {
            addTaskToList(task.text, task.startTime, task.endTime);
        });
    }
}

// Helper function to add a task to the DOM
function addTaskToList(taskText, startTime, endTime) {
    const newItem = document.createElement("li");

    const link = document.createElement("a");
    link.innerHTML = `<strong>${taskText}</strong>`;

    const startTimeSpan = document.createElement("span");
    startTimeSpan.classList.add("start-time");
    startTimeSpan.innerHTML = ` (Start: ${startTime})`;

    const endTimeSpan = document.createElement("span");
    endTimeSpan.classList.add("end-time");
    endTimeSpan.innerHTML = ` (End: ${endTime})`;

    const editButton = document.createElement("button");
    editButton.innerHTML = "Edit";
    editButton.classList.add("edit-btn");

    editButton.addEventListener("click", function () {
        const newTask = prompt("Edit your task:", taskText);
        if (newTask) {
            link.innerHTML = `<strong>${newTask}</strong>`;
            saveTasks(); // Save after editing
        }
    });

    const doneButton = document.createElement("button");
    doneButton.innerHTML = "Done";
    doneButton.classList.add("done-btn");

    doneButton.addEventListener("click", function () {
        newItem.remove();
        saveTasks(); // Save after removing
    });

    newItem.appendChild(link);
    newItem.appendChild(startTimeSpan);
    newItem.appendChild(endTimeSpan);
    newItem.appendChild(editButton);
    newItem.appendChild(doneButton);

    document.getElementById("list").appendChild(newItem);
}

// Handle form submission and add task
function handleSubmit(event) {
    event.preventDefault();

    const taskText = document.getElementById("taskInput").value;
    const startTime = document.getElementById("startTimeInput").value;
    const endTime = document.getElementById("endTimeInput").value;

    if (taskText == "" || startTime == "" || endTime == "") {
        alert("Please fill out all fields.");
        return;
    }

    addTaskToList(taskText, startTime, endTime);
    document.getElementById("taskInput").value = "";
    document.getElementById("startTimeInput").value = "";
    document.getElementById("endTimeInput").value = "";
    saveTasks(); // Save after adding
}

// Clear all tasks
function clearAllTasks() {
    document.getElementById("list").innerHTML = "";
    localStorage.removeItem("tasks");
}
