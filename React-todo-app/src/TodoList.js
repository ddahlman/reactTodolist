import React from 'react';
import Todo from './Todo';

const TodoList = ({todos, remove}) => {
    // Map through the todos
    console.log(todos);
    if (todos.length !== 0) {
        const todoNode = todos.map((todo) => {
            return (<Todo todo={todo} key={todo.id} remove={remove} />)
        });
        return (<ul>{todoNode}</ul>);
    } else {
        return (<ul></ul>)
    }

}

export default TodoList;