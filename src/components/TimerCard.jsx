import React, { useState } from 'react';
//mock data
import data from "./data.json";
//components
import Header from "./Timer/Header.jsx"
import Count from './Timer/Count.js';
//import CountDown from "./Timer/CountDown.jsx"

function TimerCard() {

  return (
    <div className='timeCard'>
      <Header />
      <Count />

    </div>
  );
}

export default TimerCard;
