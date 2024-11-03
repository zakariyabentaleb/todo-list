
// ------------------SHOW POPUP AND HIDE IT  ------------------------//
plus.addEventListener("click", togglePopup);
plus1.addEventListener("click", togglePopup);
function togglePopup() {
    const pop = document.getElementById("taskPopup");
    pop.classList.toggle("hidden");
}

// ----------------------------COUNT TASK--------------------------------------------//
function updateTaskCount() {
    document.getElementById("todoCount").innerText = document.getElementById("todoList").children.length;
    document.getElementById("inProgressCount").innerText = document.getElementById("inProgressList").children.length;
    document.getElementById("completedCount").innerText = document.getElementById("completedList").children.length;
}
// ------------------ add button  ------------------------------------------------------------------------------//
addbutton.addEventListener("click", addTask);
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
        let taskList;

        if (taskStatus === "todo") {
            taskList = document.getElementById("todoList");
        } else if (taskStatus === "inProgress") {
            taskList = document.getElementById("inProgressList");
        } else if (taskStatus === "completed") {
            taskList = document.getElementById("completedList");
        }


        const taskItem = document.createElement("li");
        taskItem.className = "p-4 bg-white rounded-lg shadow-md mb-3 border-l-4 border-sky-900  flex justify-between items-center";
        
       
        const taskContent = document.createElement("div");
        taskContent.className = "flex flex-col space-y-1";
        
        
        const taskTitle = document.createElement("strong");
        taskTitle.innerText = taskText;
        taskTitle.className = "text-xl font-semibold text-gray-800";
        
       
        const taskDescription = document.createElement("p");
        taskDescription.innerText = taskText2;
        taskDescription.className = "text-gray-600 text-sm";
        
       
        const taskValue = document.createElement("span");
        taskValue.innerText = taskText3;
        taskValue.className = "text-gray-500 text-xs italic";
        
       
        const taskDATE = document.createElement("span");
        taskDATE.innerText = taskText4;
        taskDATE.className = "text-gray-500 text-xs";



        taskContent.appendChild(taskTitle);
        taskContent.appendChild(taskDescription);
        taskContent.appendChild(taskValue);
        taskContent.appendChild(taskDATE);
        taskList.appendChild(taskItem);

        // -------------------------------------remove button---------------------------------------------//
       
        const removeButton = document.createElement("button");
        removeButton.innerText = "Remove";
        removeButton.className = "px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600";
        removeButton.onclick = function () {
            taskList.removeChild(taskItem);
            updateTaskCount();
        };
        // -------------------------------------edit button ---------------------------------------------// 

        const editButton = document.createElement("button");
        editButton.innerText = "Edit";
        editButton.className = "px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600";
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

function filterTasksByTitle() {
    const searchQuery = document.getElementById("searchInput").value.toLowerCase();
    
   
    const lists = [document.getElementById("todoList"), document.getElementById("inProgressList"), document.getElementById("completedList")];

    lists.forEach(list => {
        Array.from(list.children).forEach(task => {
            const title = task.querySelector("strong").innerText.toLowerCase();
            
          
            if (title.includes(searchQuery)) {
                task.style.display = ""; 
            } else {
                task.style.display = "none"; 
            }
        });
    });
}

