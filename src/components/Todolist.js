import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [filter, setFilter] = useState('all');

  const addTodo = (event) => {
    event.preventDefault();
    if (!newTodo) return;
    setTodos([...todos, { title: newTodo, completed: false }]);
    setNewTodo('');
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const handleToggle = (todo) => {
    const updatedTodo = { ...todo, completed: !todo.completed };
    const newTodos = todos.map((t) => (t === todo ? updatedTodo : t));
    setTodos(newTodos);
  };

  const handleFilter = (filterString) => {
    setFilter(filterString);
  };

  const filteredTodos = filter === 'all' ? todos :
    filter === 'completed' ? todos.filter(todo => todo.completed) :
    todos.filter(todo => !todo.completed);

  return (
    <div>
      <h2>Todo List</h2>
      <form onSubmit={addTodo}>
        <input
          type="text"
          name="todoInput"
          placeholder="Add new todo"
          value={newTodo}
          onChange={(event) => setNewTodo(event.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <div className="filters">
        <button onClick={() => handleFilter('all')}>All</button>
        <button onClick={() => handleFilter('completed')}>Completed</button>
        <button onClick={() => handleFilter('incomplete')}>Incomplete</button>
      </div>
      <ul>
        {filteredTodos.map((todo, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggle(todo)}
            />
            {todo.title}
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
