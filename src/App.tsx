import React from 'react';
import './App.css';
import { AddStages } from './components/add_stage';

function App() {
  return (
    <div>
      <div className="header">
        <h2>Matt's Kanban Board</h2>
      </div>
      <AddStages/>
    </div>
  );
}

export default App;
