import React from 'react';

const Todo = ({todo, remove}) => {
    // Each Todo
    return (

        <li>
            {todo.title}
            <button
                className="btn btn-danger btn-xs"
                onClick={() => { remove(todo.id) }}> Ta bort
             </button>
        </li >
    );
}

export default Todo;

