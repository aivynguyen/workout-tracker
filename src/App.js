import React, { useState } from "react";
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";
import "./App.css";

const exercises = [
  { name: "Push Ups", type: "repetition" },
  { name: "Running", type: "duration" },
  { name: "Planks", type: "repetition" },
];

function App() {
  const [selectedExercise, setSelectedExercise] = useState(null);

  return (
    <div className="app">
      <h1>Workout Tracker</h1>
      {selectedExercise ? (
        selectedExercise.type === "repetition" ? (
          <RepetitionExercise
            name={selectedExercise.name}
            onBack={() => setSelectedExercise(null)}
          />
        ) : (
          <DurationExercise
            name={selectedExercise.name}
            onBack={() => setSelectedExercise(null)}
          />
        )
      ) : (
        <div className="menu">
          <h2>Exercises</h2>
          <div className="exercise-grid">
            {exercises.map((exercise) => (
              <button key={exercise.name} onClick={() => setSelectedExercise(exercise)}>
                {exercise.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
