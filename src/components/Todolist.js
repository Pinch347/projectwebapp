// Import React and required dependencies
import React, { useState } from 'react';

// Define the TodoList functional component with state
const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  // Add a new todo item
  const addTodo = (event) => {
    event.preventDefault();
    if (!newTodo) return;
    setTodos([...todos, { title: newTodo, completed: false }]);
    setNewTodo('');
  };

  // Remove a todo item
  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  // Update the completion status of a todo item
  const toggleComplete = (index) => {
    const updatedTodos = todos.map((todo, i) => {
      if (i === index) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  // Add JSX for the todo list, input form, and filter buttons
  return (
    <div>
      <h2>Todo List</h2>
      <form onSubmit={addTodo}>
        <input type="text" name="todoInput" placeholder="Add new todo" value={newTodo} onChange={(event) => setNewTodo(event.target.value)} />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <input type="checkbox" checked={todo.completed} onChange={() => toggleComplete(index)} />
            {todo.title}
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Export the TodoList component
export default TodoList;
