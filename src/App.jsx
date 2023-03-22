import { TaskForm, TaskList } from "./components";
import { useEffect, useState } from "react";
import { tasks as data } from "./data/task";
import "./App.css";

function App() {
  return (
    <>
      <TaskForm />
      <TaskList />
    </>
  );
}

export default App;
