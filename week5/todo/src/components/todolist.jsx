import React from 'react';
import deletebtn from '../assets/img/delete.svg'

function todolist({ todos, deleteTodo, toggleTodo }) {
    return (
        <main id="main">
            {todos.map(todo => (
                <div className="list" key={todo.id}>
                    <div className="box">
                        <input
                            type="checkbox"
                            id={`checkbox-${todo.id}`}
                            checked={todo.completed}
                            onChange={() => toggleTodo(todo.id)}
                        />
                        <label htmlFor={`checkbox-${todo.id}`} />
                        <p style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                            {todo.text}
                        </p>
                    </div>
                    <button onClick={() => deleteTodo(todo.id)}>
                        <img src={deletebtn} alt="deletebtn" />
                    </button>
                </div>
            ))}
        </main>
    );
}

export default todolist;