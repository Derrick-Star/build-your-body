import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import CharacterSelector from './components/CharacterSelector';
import ExerciseTracker from './components/ExerciseTracker';
import Profile from './components/Profile';
import NavBar from './components/NavBar';
import { characters } from './data/workoutData';
import './styles/global.css';
import './styles/animations.css';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedCharacter, setSelectedCharacter] = useState(characters[0]);
  const [activityLog, setActivityLog] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('activityLog');
    if (saved) {
      setActivityLog(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('activityLog', JSON.stringify(activityLog));
  }, [activityLog]);

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  const handleSelectCharacter = (character) => {
    setSelectedCharacter(character);
  };

  return (
    <div className="app">
      <div className="main-content">
        {currentPage === 'home' && <Home onNavigate={handleNavigate} />}
        {currentPage === 'exercise' && (
          <div className="exercise-page">
            <CharacterSelector 
              selectedCharacter={selectedCharacter}
              onSelectCharacter={handleSelectCharacter}
            />
            <ExerciseTracker 
              selectedCharacter={selectedCharacter}
            />
          </div>
        )}
        {currentPage === 'profile' && (
          <Profile 
            selectedCharacter={selectedCharacter}
            activityLog={activityLog}
          />
        )}
      </div>
      <NavBar currentPage={currentPage} onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
