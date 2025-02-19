import React, { useState } from "react";

function RepetitionExercise({ name, onBack }) {
  const [count, setCount] = useState(0);

  return (
    <div className="exercise-screen">
      <button className="back-button" onClick={onBack}>← Back</button>
      <h2>{name}</h2>
      <div className="counter">
        <button onClick={() => setCount(count - 1)}>-</button>
        <span>{count}</span>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default RepetitionExercise;
