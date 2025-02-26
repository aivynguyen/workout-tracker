import React, { useState } from "react";
import "./Exercise.css";

function DistanceExercise({ name, onBack }) {
  const [distance, setDistance] = useState(0.0); // Track distance in miles/km
  const [isTracking, setIsTracking] = useState(false);

  const startTracking = () => {
    setIsTracking(true);
  };

  const stopTracking = () => {
    setIsTracking(false);
  };

  const resetDistance = () => {
    setDistance(0.0);
    setIsTracking(false);
  };

  return (
    <div className="exercise-screen">
      <button className="back-button" onClick={onBack}>←</button>
      <h2 className="exercise-title">{name}</h2>

      <div className="distance-container">
        <h3 className="distance-label">Distance Covered</h3>
        <h2 className="distance-display">{distance.toFixed(2)} km</h2>
      </div>

      <div className="distance-buttons">
        <button className="distance-btn start-btn" onClick={startTracking}>Start</button>
        <button className="distance-btn stop-btn" onClick={stopTracking}>Stop</button>
        <button className="distance-btn reset-btn" onClick={resetDistance}>Reset</button>
      </div>
    </div>
  );
}

export default DistanceExercise;
