import React from 'react';

function TodoItem({ todo, toggleComplete, deleteTodo, editTodo }) {
  return (
    <li className={todo.completed ? 'completed' : ''}>
      <div className="task-info">
        <span
          className="task-text"
          onClick={() => toggleComplete(todo.id)}
          style={{ cursor: 'pointer' }}
        >
          {todo.text}
        </span>
        {todo.dueDate && (
          <span className="task-meta">Due: {todo.dueDate} | Status: {todo.completed ? 'Completed' : 'Pending'}</span>
        )}
      </div>
      <div className="task-actions">
        <button className="btn-edit" onClick={() => editTodo(todo)}>Edit</button>
        <button className="btn-delete" onClick={() => deleteTodo(todo.id)}>Delete</button>
      </div>
    </li>
  );
}

export default TodoItem;