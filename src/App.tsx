import React, { useState } from 'react';
import './App.css';
import { AddStages } from './components/add_stage';
import AllStages from './components/stage_column';
import {IColumns, ITask} from "./components/interface";
import { useEffect } from 'react';


function App() {
  const [columns, setColumns] = useState<IColumns[]>([]);
  const [allTasks, setAllTasks] = useState<ITask[]>([])


  async function fetchAllColumns() {
    const res = await fetch("http://localhost:4000/columns");
    const {data} = await res.json();
    setColumns(data);
  };


  async function fetchAllTasks() {
    const res = await fetch("http://localhost:4000/tasks/all");
    const {data} = await res.json();
    setAllTasks(data);
  }


  useEffect(() => {fetchAllColumns()}, []);
  useEffect(() => {fetchAllTasks()}, []);
  

  async function handleTaskMoving(direction: string, taskId: number, stage_id: number) {
    let newStageId: number;
    if (direction === "left") {
      newStageId = stage_id - 1
    } else {
      newStageId = stage_id + 1
    }
    await fetch(`http://localhost:4000/tasks/${taskId}/${newStageId}`, {method: "POST"});
    fetchAllTasks();
  }

  return (
    <div>
      <div className="header">
        <h2>Matt's Kanban Board</h2>
      </div>
      <AddStages/>
      <AllStages columns={columns} allTasks={allTasks} handleTaskMoving={handleTaskMoving}/>
    </div>
  );
}

export default App;
