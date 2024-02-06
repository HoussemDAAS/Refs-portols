import React, { useRef } from "react";
import { useState } from "react";
const TimerChallenge = ({ title, targetTime }) => {

  const timer =useRef();
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);
  
  
  function handleStart() {
    setTimerStarted(true);
    timer.current=setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);
  }
  function handleStop() {
    clearTimeout(timer.current);
    setTimerStarted(false);
    setTimerExpired(false);
  }

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p className="challenge-time">Timer Expired</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={timerStarted ? handleStop : handleStart}>
          {timerStarted ? "Stop" : "Start Timer"}
        </button>
      </p>
      <p className={timerStarted ? "active" : undefined}>
        {timerStarted ? "Timer is running" : "Timer inactive"}
      </p>
    </section>
  );
};

export default TimerChallenge;
