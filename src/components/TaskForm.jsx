import React, { useState } from "react";

export const TaskForm = ({ createTask }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(title);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="type your task"
        onChange={(e) => setTitle(e.target.value)}
      />
      <button>Save</button>
    </form>
  );
};
