import React from 'react';
import TodoItem from './todoitem';

function todolist({ todos, deleteTodo, toggleTodo }) {
    return (
        <main id="main">
        {todos.map(todo => (
            <TodoItem
                key={todo.id}
                todo={todo}
                deleteTodo={deleteTodo}
                toggleTodo={toggleTodo}
            />
        ))}
    </main>
    );
}

export default todolist;
