import React from 'react';

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  const { id, title, completed } = todo;

  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleComplete(id)}
      />
      <span className={completed ? 'completed' : null}>{title}</span>
      <button className="delete-btn" onClick={() => deleteTodo(id)}>
        X
      </button>
    </li>
  );
};

export default TodoItem;
