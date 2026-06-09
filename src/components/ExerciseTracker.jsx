import React, { useState, useEffect } from 'react';
import { weeklyRoutine, progressionLevels } from '../data/workoutData';
import '../styles/exerciseTracker.css';

function ExerciseTracker({ selectedCharacter }) {
  const [currentDay, setCurrentDay] = useState(getCurrentDay());
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [restTime, setRestTime] = useState(0);
  const [currentSet, setCurrentSet] = useState(1);
  const [completedReps, setCompletedReps] = useState(0);
  const [progressionLevel, setProgressionLevel] = useState('beginner');
  const [activityLog, setActivityLog] = useState([]);

  function getCurrentDay() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[new Date().getDay()];
  }

  const todayWorkout = weeklyRoutine[currentDay];
  const currentExercise = todayWorkout?.exercises[currentExerciseIndex];
  const multiplier = progressionLevels[progressionLevel].multiplier;

  useEffect(() => {
    if (restTime > 0 && !isPaused) {
      const timer = setTimeout(() => setRestTime(restTime - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [restTime, isPaused]);

  const handleCompleteRep = () => {
    const repsNeeded = Math.ceil(currentExercise.reps * multiplier);
    if (completedReps < repsNeeded) {
      setCompletedReps(completedReps + 1);
    }
  };

  const handleCompleteSet = () => {
    const repsNeeded = Math.ceil(currentExercise.reps * multiplier);
    if (currentSet < currentExercise.sets) {
      setCurrentSet(currentSet + 1);
      setCompletedReps(0);
      setRestTime(currentExercise.restSeconds);
    } else {
      handleNextExercise();
    }
  };

  const handleNextExercise = () => {
    if (currentExerciseIndex < todayWorkout.exercises.length - 1) {
      setCurrentExerciseIndex(currentExerciseIndex + 1);
      setCurrentSet(1);
      setCompletedReps(0);
      setRestTime(0);
    } else {
      handleCompleteDay();
    }
  };

  const handleCompleteDay = () => {
    const today = new Date().toISOString().split('T')[0];
    setActivityLog([...activityLog, today]);
    alert('Workout completed! Great job!');
    resetExercise();
  };

  const handlePause = () => {
    setIsPaused(!isPaused);
  };

  const resetExercise = () => {
    setCurrentExerciseIndex(0);
    setCurrentSet(1);
    setCompletedReps(0);
    setRestTime(0);
  };

  const isRestDay = todayWorkout?.exercises.length === 0;

  return (
    <div className="exercise-tracker animate-fadeIn">
      <div className="header">
        <h2>{selectedCharacter.name} - {selectedCharacter.anime}</h2>
        <p>Progression Level: {progressionLevels[progressionLevel].description}</p>
      </div>

      {isRestDay ? (
        <div className="rest-day-card">
          <h3>Rest Day</h3>
          <p>Take it easy today. Recovery is part of the journey.</p>
        </div>
      ) : (
        <>
          <div className="workout-info">
            <h3>{currentDay} - {todayWorkout.focus}</h3>
          </div>

          {currentExercise && (
            <div className="exercise-card animate-slideInUp">
              <h4>{currentExercise.name}</h4>
              <div className="exercise-stats">
                <div className="stat">
                  <span>Set</span>
                  <p>{currentSet} / {currentExercise.sets}</p>
                </div>
                <div className="stat">
                  <span>Reps</span>
                  <p>{completedReps} / {Math.ceil(currentExercise.reps * multiplier)}</p>
                </div>
                {restTime > 0 && (
                  <div className="stat">
                    <span>Rest</span>
                    <p>{restTime}s</p>
                  </div>
                )}
              </div>

              <div className="button-group">
                <button 
                  className="btn btn-primary"
                  onClick={handleCompleteRep}
                  disabled={isPaused || completedReps >= Math.ceil(currentExercise.reps * multiplier)}
                >
                  Complete Rep
                </button>
                <button 
                  className="btn btn-secondary"
                  onClick={handleCompleteSet}
                  disabled={completedReps < Math.ceil(currentExercise.reps * multiplier)}
                >
                  Complete Set
                </button>
                <button 
                  className={`btn ${isPaused ? 'btn-resume' : 'btn-pause'}`}
                  onClick={handlePause}
                >
                  {isPaused ? 'Resume' : 'Pause'}
                </button>
              </div>
            </div>
          )}

          <div className="progression-control">
            <label>Progression Level:</label>
            <select 
              value={progressionLevel}
              onChange={(e) => setProgressionLevel(e.target.value)}
            >
              {Object.keys(progressionLevels).map(level => (
                <option key={level} value={level}>
                  {progressionLevels[level].description}
                </option>
              ))}
            </select>
          </div>
        </>
      )}

      <div className="activity-checklist">
        <h3>Activity Log</h3>
        <div className="log-items">
          {activityLog.length > 0 ? (
            activityLog.map((date, index) => (
              <div key={index} className="log-item">
                {date}
              </div>
            ))
          ) : (
            <p>No workouts logged yet</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ExerciseTracker;
