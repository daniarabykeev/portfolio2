import { useEffect, useState } from "react";
import "./ToDoPage.css";
import Task from "../../components/Task/Task";
import TaskForm from "../../components/Task/TaskForm";

function ToDoPage() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (tasks.length === 0) return;
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    setTasks(tasks);
  }, []);

  function addTask(name) {
    setTasks((prev) => {
      return [...prev, { name: name, done: false }];
    });
  }

  function removeTask(indexToRemove) {
    setTasks((prev) => {
      return prev.filter((taskObject, index) => index !== indexToRemove);
    });
  }

  function updateTaskDone(taskIndex, newDone) {
    setTasks((prev) => {
      const newTasks = [...prev];
      newTasks[taskIndex].done = newDone;
      return newTasks;
    });
  }

  const numberOfCompletedTasks = tasks.filter((t) => t.done).length;
  const numberOfTotalTasks = tasks.length;

  function getMessage() {
    const percentage = (numberOfCompletedTasks / numberOfTotalTasks) * 100;
    if (percentage === 0) {
      return "Try to do at least one! 🙏🏻";
    }
    if (percentage === 100) {
      return "Nice job for today! 🔥";
    }
    return "Keep it going 💪🏻";
  }

  function renameTask(index, newName) {
    setTasks((prev) => {
      const newTasks = [...prev];
      newTasks[index].name = newName;
      return newTasks;
    });
  }

  return (
    <main>
      <h1>
        {numberOfCompletedTasks}/{numberOfTotalTasks} Complete
      </h1>
      <h2>{getMessage()}</h2>
      <TaskForm onAdd={addTask} />
      {tasks.map((task, index) => (
        <Task
          {...task}
          onRename={(newName) => renameTask(index, newName)}
          onTrash={() => removeTask(index)}
          onToggle={(done) => updateTaskDone(index, done)}
        />
      ))}
    </main>
  );
}

export default ToDoPage;
