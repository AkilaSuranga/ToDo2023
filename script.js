function addTask() {
    var taskInput = document.getElementById("newTask");
    var taskList = document.getElementById("taskList");

    if (taskInput.value !== "") {
        var li = document.createElement("li");
        li.innerHTML = taskInput.value + '<button class="delete-btn" onclick="deleteTask(this)">Delete</button>';
        taskList.appendChild(li);
        taskInput.value = "";
    }
}

function deleteTask(element) {
    var li = element.parentElement;
    li.remove();
}
