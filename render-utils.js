export function renderTodo(todos) {
        // create a div and a p tag
    const div = document.createElement('div');
    // const p = document.createElement('p');
    // depending on whether the todo is complete, give the div the appropriate css class ('complete' or 'incomplete')
    // add the 'todo' css class no matter what
    div.classList.add('todo');
    console.log(todos);
    for (let thing of todos) {
        const li = document.createElement('li');
        li.classList.add('todo-item');
            // put the todo's text into the p tag
        li.textContent = thing.todo;
            // append stuff
        div.append(li);
    }
        // return the div
    return div;
    // add event listener for click and call handleComplete function
    

}
