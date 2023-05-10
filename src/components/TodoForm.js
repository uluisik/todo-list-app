import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        value={value}
        type="text"
        placeholder="What is the task today?"
        className="todo-input"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todu-btn">
        Add Task
      </button>
    </form>
  );
};

export default TodoForm;
