import React, { useState } from 'react';
//mock data
import data from "./data.json";
//components
import Header from "./Timer/Header"
import CountDown from "./Timer/CountDown.jsx"

function TimerCard() {

  return (
    <div className='timeCard'>
      <Header />
      <CountDown />

    </div>
  );
}

export default TimerCard;
