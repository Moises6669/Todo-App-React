import { useEffect, useState } from "react";
import { tasks as data } from "../task";

export const TaskList = () => {
  const [task, useTasks] = useState([]);

  useEffect(() => {
    useTasks(data);
  }, []);

  return (
    <>
      {task.map((task) => (
        <div key={task.id}>
          <h1>{task.title}</h1>
          <p>{task.description}</p>
        </div>
      ))}
    </>
  );
};
