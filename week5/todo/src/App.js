import React from 'react';
import './assets/scss/main.scss'
import Header from './components/Header.jsx';
import TodoList from './components/todolist.jsx';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
      const newTodo = { id: Date.now(), text, completed: false };
      setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
      setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id) => {
      setTodos(
          todos.map(todo =>
              todo.id === id ? { ...todo, completed: !todo.completed } : todo
          )
      );
  };

  return (
      <div className="wrap">
          <Header addTodo={addTodo} />
          <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
      </div>
  );
}

export default App;