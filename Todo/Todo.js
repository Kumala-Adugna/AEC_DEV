// ==========================================
// 1. DOM Elements Selection
// ==========================================
const taskForm = document.querySelector('.task-form form');
const taskInput = document.getElementById('Itd');
const activeCountEl = document.querySelector('.div1 h2');
const completedCountEl = document.querySelector('.div2 h2');
const totalCountEl = document.querySelector('.div3 h2');

// Create a container dynamically or reference an existing wrapper for items
let taskListContainer = document.querySelector('.todo-container');
if (!taskListContainer) {
    taskListContainer = document.createElement('div');
    taskListContainer.className = 'todo-container';
    document.querySelector('.task-list').after(taskListContainer);
}

// ==========================================
// 2. Application State
// ==========================================
let todos = [
    { id: 1, text: "Welcome to your to-do list!", completed: false },
    { id: 2, text: "Click the checkbox to mark as complete", completed: false },
    { id: 3, text: "Hover to delete items", completed: false }
];

// ==========================================
// 3. Render Function (UI Updater)
// ==========================================
function renderTodos() {
    taskListContainer.innerHTML = '';
    todos.forEach(todo => {
        const todoItem = document.createElement('div');
        todoItem.className = 'todo-item';
        const checkMarkStyle = todo.completed ? 'background-color: green;' : '';
        const textStyle = todo.completed ? 'text-decoration: line-through; color: #8a8686;' : '';

        todoItem.innerHTML = `
            <span class="todo-check" data-id="${todo.id}" style="${checkMarkStyle}">&#10003;</span>
            <span class="todo-text" style="${textStyle}">${todo.text}</span>
            <button type="button" class="todo-delete" data-id="${todo.id}" aria-label="Delete task">&times;</button>
        `;
        
        taskListContainer.appendChild(todoItem);
    });

    updateCounters();
}

// ==========================================
// 4. Counter Management Function
// ==========================================
function updateCounters() {
    const totalTasks = todos.length;
    const completedTasks = todos.filter(todo => todo.completed).length;
    const activeTasks = totalTasks - completedTasks;

    totalCountEl.textContent = totalTasks;
    completedCountEl.textContent = completedTasks;
    activeCountEl.textContent = activeTasks;
}

// ==========================================
// 5. Event Handlers & Listeners
// ==========================================

taskForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const taskText = taskInput.value.trim();
    if (taskText === '') return;
    const newTodo = {
        id: Date.now(), 
        text: taskText,
        completed: false
    };
    todos.push(newTodo);
    taskInput.value = '';
    renderTodos();
});

// Event Delegation for Toggling & Deleting
taskListContainer.addEventListener('click', function(event) {
    const checkTarget = event.target.closest('.todo-check');
    const deleteTarget = event.target.closest('.todo-delete');

    // If checkmark is clicked
    if (checkTarget) {
        const todoId = parseInt(checkTarget.getAttribute('data-id'));
        const todoIndex = todos.findIndex(todo => todo.id === todoId);
        if (todoIndex !== -1) {
            todos[todoIndex].completed = !todos[todoIndex].completed;
        }
        renderTodos();
        return; // Exit out of the function early
    }

    // If delete button is clicked
    if (deleteTarget) {
        const todoId = parseInt(deleteTarget.getAttribute('data-id'));
        // Filter out the item with the matching ID
        todos = todos.filter(todo => todo.id !== todoId);
        renderTodos();
        return; // Exit out of the function early
    }
});
// ==========================================
// 6. Initial Bootstrapping
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    renderTodos();
});