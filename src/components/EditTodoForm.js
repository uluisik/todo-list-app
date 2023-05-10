import React, { useState } from "react";

const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
    setValue("");
  };
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        value={value}
        type="text"
        placeholder="Update Task"
        className="todo-input"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todu-btn">
        UPdate Task
      </button>
    </form>
  );
};

export default EditTodoForm;
