// Import React and required dependencies
import React, { useState } from 'react';

// Define the TodoList functional component with state
const TodoList = () => {
  const [todos, setTodos] = useState([]);

  // Add a new todo item
  const addTodo = (event) => {
    event.preventDefault();
    const newTodo = event.target.elements.todoInput.value;
    setTodos([...todos, newTodo]);
    event.target.elements.todoInput.value = '';
  };

  // Remove a todo item
  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
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
            {todo}
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Export the TodoList component
export default TodoList;
