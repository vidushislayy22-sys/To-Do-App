import React, { useState, useEffect } from 'react';

function TodoForm({ addTodo, updateTodo, currentTodo, setCurrentTodo }) {
  const [text, setText] = useState('');
  const [dueDate, setDueDate] = useState('');

  useEffect(() => {
    if (currentTodo) {
      setText(currentTodo.text);
      setDueDate(currentTodo.dueDate || '');
    } else {
      setText('');
      setDueDate('');
    }
  }, [currentTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    if (currentTodo) {
      updateTodo({
        ...currentTodo,
        text,
        dueDate,
      });
      setCurrentTodo(null);
    } else {
      addTodo({
        id: Date.now(),
        text,
        completed: false,
        dueDate,
      });
    }
    setText('');
    setDueDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button type="submit">
        {currentTodo ? 'Update Task' : 'Add Task'}
      </button>
      {currentTodo && (
        <button
          type="button"
          style={{ backgroundColor: '#95a5a6' }}
          onClick={() => {
            setCurrentTodo(null);
            setText('');
            setDueDate('');
          }}
        >
          Cancel
        </button>
      )}
    </form>
  );
}

export default TodoForm;