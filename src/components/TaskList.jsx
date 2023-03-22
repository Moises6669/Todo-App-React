import { TaskCard } from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export const TaskList = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task}/>
      ))}
    </>
  );
};
