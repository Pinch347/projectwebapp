// Import React and required dependencies
import React, { useState } from 'react';

// Define the TodoList functional component with state
const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [filter, setFilter] = useState('all');

  // Add a new todo item
  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, { title: newTodo, completed: false }]);
    setNewTodo('');
  };

  // Update a todo item's completion status
  const toggleCompleted = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  // Remove a todo item
  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  // Filter the todo items based on completion status
  const filteredTodos = todos.filter((todo) => {
    if (filter === 'all') {
      return true;
    } else if (filter === 'completed') {
      return todo.completed;
    } else {
      return !todo.completed;
    }
  });

  // Add JSX for the todo list, input form, and filter buttons
  return (
    <div>
      <h2>Todo List</h2>
      <form onSubmit={addTodo}>
        <input type="text" value={newTodo} onChange={(event) => setNewTodo(event.target.value)} placeholder="Add new todo" />
        <button type="submit">Add</button>
      </form>
      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('active')}>Active</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
      </div>
      <ul>
        {filteredTodos.map((todo, index) => (
          <li key={index}>
            <input type="checkbox" checked={todo.completed} onChange={() => toggleCompleted(index)} />
            {todo.title}
            <button onClick={() => removeTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Export the TodoList component
export default TodoList;
