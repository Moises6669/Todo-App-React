import { TaskForm, TaskList } from "./components";
import { useEffect, useState } from "react";
import { tasks as data } from "./task";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  const createTask = (taskTitle) => {
    console.log(taskTitle)
    setTasks([
      ...tasks,
      {
        title: taskTitle,
        id: tasks.length,
        description: "the best description",
      },
    ]);
  };

  return (
    <>
      <TaskForm createTask={createTask} />
      <TaskList tasks={tasks} />
    </>
  );
}

export default App;
