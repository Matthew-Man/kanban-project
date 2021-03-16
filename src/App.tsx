import React from 'react';
import './App.css';
import { AddStages } from './components/add_stage';
import { StageColumn } from './components/stage_column';

function App() {
  return (
    <div>
      <div className="header">
        <h2>Matt's Kanban Board</h2>
      </div>
      <AddStages/>
      <StageColumn />
    </div>
  );
}

export default App;
