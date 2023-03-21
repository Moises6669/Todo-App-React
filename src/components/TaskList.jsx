import { TaskCard } from "./TaskCard";

export const TaskList = ({ tasks, deleteTask }) => {
  return (
    <>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} deleteTask={deleteTask} />
      ))}
    </>
  );
};
