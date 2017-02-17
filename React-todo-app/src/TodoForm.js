import React from 'react';

const TodoForm = ({addTodo}) => {
    // Input tracker
    let input;
    //Return JSX
    return (
        <div>
            <input ref={node =>
            { input = node; }} />

            <button onClick={() => {
                addTodo(input.value);
                input.value = '';
            }}>
                +
      </button>
        </div>
    );
};

export default TodoForm;