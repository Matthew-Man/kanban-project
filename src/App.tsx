import React, { useState } from 'react';
import './App.css';
import { AddStages } from './components/add_stage';
import AllStages from './components/stage_column';
import {IColumns, ITask} from "./components/interface";
import { useEffect } from 'react';
import { ModalBox } from './components/modal';


function App() {
  const [columns, setColumns] = useState<IColumns[]>([]);
  const [allTasks, setAllTasks] = useState<ITask[]>([]);
  const [isModalShown, setModalShown] = useState(false);
  const [modalInput, setModalInput] = useState("");
  const [mColumnSelect, setMColumnSelect] = useState(0);

  const mColumnName = columns.find((item) => item.id === mColumnSelect)?.name;

  const toggleModalShown = () => setModalShown(!isModalShown);


  //Main API requests --------
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

  
  async function sendNewTask(taskDescription: string, columnId: number) {
    const data = {
      "stageId": columnId,
      "taskDescription": taskDescription
    }
    const res = await fetch("http://localhost:4000/tasks/new", {
      method: "PUT",
      body: JSON.stringify(data), // body data type must match "Content-Type" header
      headers:{
        'Content-Type': 'application/json'
      }
    })
    console.log(await res.json())
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
    await fetch(`http://localhost:4000/tasks/${taskId}/${newStageId}`, {method: "PUT"});
    fetchAllTasks();
  }
  

  async function handleAddTask() {
    await sendNewTask(modalInput, mColumnSelect);
    setModalInput("");
    setModalShown(false);
    fetchAllTasks();
  }
  

  async function handleDeleteTask(taskId: number) {
    await fetch(`http://localhost:4000/tasks/${taskId}`, {method: "DELETE"});
    fetchAllTasks();
  }


  const propsAllStages = {
    columns: columns,
    allTasks: allTasks,
    handleTaskMoving: handleTaskMoving,
    toggleModalShown: toggleModalShown,
    setMColumnSelect: setMColumnSelect,
    handleDeleteTask: handleDeleteTask
  }

  const propsModalBox = {
    isModalShown: isModalShown,
    toggleModalShown: toggleModalShown,
    modalInput: modalInput,
    setModalInput:setModalInput,
    handleAddTask: handleAddTask,
    columnName: mColumnName
  }


  return (
    <div>
      <div className="header">
        <h2>Matt's Kanban Board</h2>
      </div>
      <AddStages/>
      <AllStages {...propsAllStages}/>
      <ModalBox {...propsModalBox}/>
    </div>
  );
}

export default App;
