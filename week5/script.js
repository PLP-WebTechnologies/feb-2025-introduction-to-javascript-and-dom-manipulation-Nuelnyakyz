const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');
const taskCounter = document.getElementById('task-counter');

let taskCount = 0;

document.addEventListener('DOMContentLoaded', function() {
    addTaskButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});

function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        return;
    }

    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';
    
    const taskTextEl = document.createElement('span');
    taskTextEl.className = 'task-text';
    taskTextEl.textContent = taskText;

    taskTextEl.addEventListener('click', function() {
        toggleTaskCompletion(taskItem);
    });
    
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete';
    
    deleteBtn.addEventListener('click', function() {
        deleteTask(taskItem);
    });
    
    taskItem.appendChild(taskTextEl);
    taskItem.appendChild(deleteBtn);
    
    taskList.appendChild(taskItem);

    taskInput.value = '';

    taskCount++;
    updateTaskCounter();
}

function toggleTaskCompletion(taskItem) {
    taskItem.classList.toggle('completed');

    if (taskItem.classList.contains('completed')) {
        taskCount--;
    } else {
        taskCount++;
    }
    
    updateTaskCounter();
}

function deleteTask(taskItem) {
    if (!taskItem.classList.contains('completed')) {
        taskCount--;
    }

    taskItem.remove();

    updateTaskCounter();
}

function updateTaskCounter() {
    taskCounter.textContent = `You have ${taskCount} tasks remaining`;
    
    if (taskCount >= 5) {
        taskCounter.style.color = '#e74c3c';
    } else if (taskCount >= 1) {
        taskCounter.style.color = '#f39c12';
    } else {
        taskCounter.style.color = '#27ae60';
    }
}