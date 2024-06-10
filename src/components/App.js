import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleTaskDelete(taskToDelete) {
    setTasks(tasks.filter(task => task.text !== taskToDelete));
  }

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  function handleTaskFormSubmit(newTask) {
    setTasks([...tasks, newTask]);
  }

  const tasksToDisplay = tasks.filter(task => {
    if (selectedCategory === "All") return true;
    return task.category === selectedCategory;
  });

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} 
                      selectedCategory={selectedCategory}
                      onCategoryChange={handleCategoryChange}
      />
      <NewTaskForm  categories={CATEGORIES.filter(cat => cat !== "All")} 
                    onTaskFormSubmit={handleTaskFormSubmit} 
      />
      <TaskList tasks={tasksToDisplay} onDeleteTask={handleTaskDelete}/>
    </div>
  );
}

export default App;
