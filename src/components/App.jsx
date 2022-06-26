import React, { useState } from 'react';
//mock data
import data from "./data.json";
//components
import Header from "./ToDo/Header";
import ToDoList from "./ToDo/ToDoList";
import Apps from './Apps';
import Appp from "./Appp"

function App() {

  return (
    <div>
      <Apps />
      <Appp />
    </div>
  );
}

export default App;
