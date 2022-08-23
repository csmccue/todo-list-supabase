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

// let todos = [];

todoForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    // create todo
    const formData = new FormData(todoForm);
    await createTodo({
        // const todo = response.data;
        todo: formData.get('todo'),
    });
    // todos.push(response.todo);
    // console.log(todos);

    // reset the form
    todoForm.reset();
    // display the todos
    displayTodos();
});

// create todo state

// add async complete todo handler function
    // call completeTodo
    // swap out todo in array
    // call displayTodos

async function todoHandler(todo) {
    await completeTodo(todo);
    displayTodos();
}
   

async function displayTodos() {
        // clear the container (.innerHTML = '')
    todosEl.innerHTML = '';
    // display the list of todos, 
    const grabTodos = await getTodos();
    // console.log(grabTodos);
    const list = renderTodo(grabTodos, todoHandler);
    todosEl.append(list);
          // call render function, pass in state and complete handler function!
          // append to .todos
}

logoutButton.addEventListener('click', () => {
    logout();
});


deleteButton.addEventListener('click', async () => {
    // delete all todos
    // console.log('clicked delete');
    await deleteAllTodos();
    // console.log('post delete all todos');
    // modify state to match
    // todos = [];
    // re displayTodos
    displayTodos();
});


// add page load function
    // fetch the todos and store in state
    // call displayTodos
async function loadPage() {
    const response = await getTodos();
    if (response.error) {
        console.log(response.error.message);
    } else {
        displayTodos();
    }
}

loadPage();