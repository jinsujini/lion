import React, { useState } from 'react';
import plus from '../assets/img/plus.svg';

function Header({ addTodo }) {
  const [input, setInput] = useState('');

  const handleAddTodo = () => {
    if (input.trim() === '') {
      alert('내용을 입력해주세요');
      return;
    }
    addTodo(input);
    setInput('');
  };

  return (
    <header>
      <h1>TO-DO LIST</h1>
      <div className="add">
        <input
          type="text"
          placeholder="오늘 할 일을 입력해주세요."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleAddTodo}>
          <img src={plus} alt="plusbtn" />
        </button>
      </div>
    </header>
  );
}

export default Header;
