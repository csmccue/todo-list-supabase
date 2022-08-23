import { 
    checkAuth, 
    createTodo, 
    completeTodo,
    getTodos,
    logout,
    deleteAllTodos, 
} from '../fetch-utils.js';
import { renderTodo } from '../render-utils.js';

checkAuth();

const todosEl = document.querySelector('.todos');
const todoForm = document.querySelector('.todo-form');
const logoutButton = document.querySelector('#logout');
const deleteButton = document.querySelector('.delete-button');

let todos = [];

todoForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(todoForm);
    const response = await createTodo({
        // const todo = response.data;
        todo: formData.get('todo'),
    });
    console.log('any message', response);
    // todos.push(todo);
    displayTodos();
    // on submit, create a todo, reset the form, and display the todos
    formData.reset();
});

// create todo state

// add async complete todo handler function
    // call completeTodo
    // swap out todo in array
    // call displayTodos

   

async function displayTodos() {
        // clear the container (.innerHTML = '')
    todosEl.innerHTML = '';
    // display the list of todos, 
    const grabTodos = await getTodos();
    const list = renderTodo(grabTodos);
    todosEl.append(list);
          // call render function, pass in state and complete handler function!
          // append to .todos
}

logoutButton.addEventListener('click', () => {
    logout();
});


deleteButton.addEventListener('click', async () => {
    // delete all todos
    // modify state to match
    // re displayTodos
});


// add page load function
    // fetch the todos and store in state
    // call displayTodos
async function loadPage() {
    const response = await getTodos();
    if (response.error) {
        console.log(response.error.message);
    } else {
        todos = response.data;
        displayTodos();
    }
}

loadPage();