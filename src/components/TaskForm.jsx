import React, { useState } from "react";

export const TaskForm = ({ createTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="type your task"
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        cols="30"
        rows="10"
        placeholder="write the description of the new task"
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button>Save</button>
    </form>
  );
};
