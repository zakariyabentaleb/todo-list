
function togglePopup() {
    const popup = document.getElementById("taskPopup");
    popup.classList.toggle("hidden");  
}

function updateTaskCount() {
document.getElementById("todoCount").innerText = document.getElementById("todoList").children.length;
document.getElementById("inProgressCount").innerText = document.getElementById("inProgressList").children.length;
document.getElementById("completedCount").innerText = document.getElementById("completedList").children.length;
}
function addTask() {
const taskInput = document.getElementById("taskInput");
const taskText = taskInput.value.trim();

const taskInput2 = document.getElementById("taskInput2");
const taskText2 = taskInput2.value.trim();

const taskInput3 = document.getElementById("taskInput3");
const taskText3 = taskInput3.value.trim();

const taskInput4 = document.getElementById("taskInput4");
const taskText4 = taskInput4.value;

const taskStatus = document.getElementById("taskStatus").value;

if (taskText && taskText2 && taskText3 && taskText4) {
   let taskList ;
    
    if (taskStatus === "todo") {
        taskList = document.getElementById("todoList");
    } else if (taskStatus === "inProgress") {
        taskList = document.getElementById("inProgressList");
    } else if (taskStatus === "completed") {
        taskList = document.getElementById("completedList");
    }

   
    const taskItem = document.createElement("li");
    taskItem.className = "p-2 bg-gray-100 rounded shadow mb-2";

    
    const taskContent = document.createElement("div");
    taskContent.className = "flex flex-col";


    const taskTitle = document.createElement("strong");
    taskTitle.innerText = taskText;
    taskTitle.className = "text-lg";

    
    const taskDescription = document.createElement("p");
    taskDescription.innerText = taskText2;
    taskDescription.className = "text-gray-600";

  
    const taskValue = document.createElement("span");
    taskValue.innerText = taskText3;
    taskValue.className = "text-gray-500 italic";

    const taskDATE = document.createElement("span");
    taskDATE.innerText  = taskText4;
    taskDATE.className = "text-gray-500"; 
    

    
    taskContent.appendChild(taskTitle);
    taskContent.appendChild(taskDescription);
    taskContent.appendChild(taskValue);
    taskContent.appendChild(taskDATE);
    taskList.appendChild(taskItem);

    
    const removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    removeButton.className = "mt-2 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600";
    removeButton.onclick = function () {
        taskList.removeChild(taskItem);
        updateTaskCount();
    };
    const editButton = document.createElement("button");
    editButton.innerText = "Edit";
    editButton.className = "mr-2 px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600";
    editButton.onclick = function () {
        document.getElementById("taskInput").value = taskText;
        document.getElementById("taskInput2").value = taskText2;
        document.getElementById("taskInput3").value = taskText3;
        document.getElementById("taskInput4").value = taskText4;
        document.getElementById("taskStatus").value = taskStatus;
        togglePopup();
        updateTaskCount();
        taskList.removeChild(taskItem);
    };

    
    taskItem.appendChild(taskContent);
    taskItem.appendChild(editButton);
    taskItem.appendChild(removeButton);

    
    taskInput.value = "";
    taskInput2.value = "";
    taskInput3.value = "";
    taskInput4.value = "";
    document.getElementById("taskStatus").value = "todo";
   
    togglePopup();
    updateTaskCount();
}
}
