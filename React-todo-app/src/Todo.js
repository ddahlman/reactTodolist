import React from 'react';

const Todo = ({todo, remove}) => {
    // Each Todo
    return (
        <li
            onClick={() => { remove(todo.id) }}>
            {todo.title}
        </li >
    );
}

export default Todo;

