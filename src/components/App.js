import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [category, setCategory] = useState("All")

  function handleTaskDelete(taskText) {
    setTasks(tasks.filter((task) => {
      return task.text !== taskText
    }))
  }

  const visibleTasks = tasks.filter((task) => {
    return category === "All" ? true : (task.category === category)
  })

  function handleTaskAdd(newTask) {
    setTasks([...tasks, newTask])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={category} onSelectCategory={setCategory}/>
      <NewTaskForm categories={CATEGORIES.filter((category) => category !== "All")} onTaskFormSubmit={handleTaskAdd}/>
      <TaskList tasks={visibleTasks} onTaskDelete={handleTaskDelete}/>
    </div>
  );
}

export default App;
