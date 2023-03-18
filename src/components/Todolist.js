// Import React and required dependencies
import React, { useState } from 'react';

// Define the TodoList functional component with state
const TodoList = () => {
  const [todos, setTodos] = useState([]);

  // Add a new todo item
  const addTodo = (event) => {
    event.preventDefault();
    const newTodo = event.target.elements.todoInput.value;
    setTodos([...todos, { title: newTodo, completed: false }]);
    event.target.elements.todoInput.value = '';
  };

  // Remove a todo item
  const handleDelete = (index) => {
    const filteredTodos = todos.filter((_, i) => i !== index);
    setTodos(filteredTodos);
  };

  // Update the completion status of a todo item
  const handleToggle = (index) => {
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
        <input type="text" name="todoInput" placeholder="Add new todo" />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <input type="checkbox" checked={todo.completed} onChange={() => handleToggle(index)} />
            {todo.title}
            <button onClick={() => handleDelete(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Export the TodoList component
export default TodoList;
