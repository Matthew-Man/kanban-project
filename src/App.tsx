import React, { useState } from 'react';
import './App.css';
import { AddStages } from './components/add_stage';
import AllStages from './components/stage_column';
import {IColumns} from "./components/interface";
import { useEffect } from 'react';

function App() {
  const [columns, setColumns] = useState<IColumns[]>([]);
  // const [columnInput, setColumnInput] = useState("");

  async function getColumns() {
    const res = await fetch("http://localhost:4000/columns");
    const {data} = await res.json();
    setColumns(data) 
  };

  useEffect(() => {getColumns()}, [])

  return (
    <div>
      <div className="header">
        <h2>Matt's Kanban Board</h2>
      </div>
      <AddStages/>
      <AllStages columns={columns} getColumns={getColumns}/>
    </div>
  );
}

export default App;
