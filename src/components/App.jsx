import React, { useState } from 'react';
//mock data
import data from "./data.json";
//components
import ToDoCard from './ToDoCard';
import TimerCard from './TimerCard';

function App() {

  return (
    <div>
      <ToDoCard />
      <TimerCard />
    </div>
  );
}

export default App;
