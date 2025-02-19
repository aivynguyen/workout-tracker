import React, { useState, useEffect } from "react";

function DurationExercise({ name, onBack }) {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => setTime(time + 1), 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, time]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="exercise-screen">
      <button className="back-button" onClick={onBack}>← Back</button>
      <h2>{name}</h2>
      <div className="timer">
        <h3>{formatTime(time)}</h3>
      </div>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? "Pause" : "Start"}
      </button>
      <button onClick={() => { setTime(0); setIsRunning(false); }}>Reset</button>
    </div>
  );
}

export default DurationExercise;
