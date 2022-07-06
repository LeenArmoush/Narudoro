// import React, { useState, useEffect } from 'react';
// import { directive } from 'vue/types/umd';


// function CountDown() {
//   // const [timerState, setTimerState] = useState({
//   //   // minute times 60 seconds
//   //   sessionLength: 25 * 60,
//   //   breakLength: 5 * 60,
//   //   isRunning: false,
//   //   seconds: 0,
//   //   isSession: true,
//   //   // can include number of sessions/breaks taken as well if you would like
//   // });
//   const [seconds, setSeconds]= useState(0);
//   const [isRunning, setIsRunning]= useState(false);
//   useEffect(() => {
//     if (isRunning) {
//       window.setInterval(() => {
//         setSeconds(seconds => seconds + 1);
//       }, 1000);
//     }
//   }, [isRunning]);

//   return (
//     <div>
//     <button onClick={() => setSeconds(seconds +1)}>inc seconds</button>
//     <button onClick={() => setCount(count +1)}>inc count</button>
//     </div>
//   )
// }
 
// // const CountDown = () => {
// //    return (
// //           <h1>COUNTDOWN</h1>

// //    );
// // };


 
// export default CountDown;

import React from 'react';
 
const CountDown = () => {
   return (
       <header>
           <h1>Yessir</h1>
       </header>
   );
};
 
export default CountDown;