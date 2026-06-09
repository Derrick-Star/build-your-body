import React from 'react';
import { characters } from '../data/workoutData';
import '../styles/home.css';

function Home({ onNavigate }) {
  return (
    <div className="home-container animate-fadeIn">
      <div className="hero-section animate-slideInDown">
        <h1>Anime Workout Routine</h1>
        <p>Build muscles like your favorite anime characters using calisthenics</p>
        <button className="cta-button" onClick={() => onNavigate('exercise')}>
          Start Your Journey
        </button>
      </div>

      <div className="features-section">
        <h2>Key Features</h2>
        <div className="features-grid">
          <div className="feature-card animate-slideInUp">
            <h3>Monthly Routines</h3>
            <p>Complete 4-week training cycles that progressively increase in difficulty</p>
          </div>
          <div className="feature-card animate-slideInUp">
            <h3>Character Selection</h3>
            <p>Choose from 8 anime characters with unique training focuses</p>
          </div>
          <div className="feature-card animate-slideInUp">
            <h3>Progress Tracking</h3>
            <p>Log your workouts and track your achievements with activity calendar</p>
          </div>
          <div className="feature-card animate-slideInUp">
            <h3>Calisthenics Only</h3>
            <p>All exercises use body weight - no equipment needed</p>
          </div>
          <div className="feature-card animate-slideInUp">
            <h3>Progression Levels</h3>
            <p>Adjust difficulty from Beginner to Master as you get stronger</p>
          </div>
          <div className="feature-card animate-slideInUp">
            <h3>Rest Days Built-in</h3>
            <p>Smart workout schedule with rest days for recovery</p>
          </div>
        </div>
      </div>

      <div className="characters-showcase">
        <h2>Available Characters</h2>
        <div className="character-list">
          {characters.map((char) => (
            <div key={char.id} className="character-item animate-slideInLeft">
              <h4>{char.name}</h4>
              <p className="anime">{char.anime}</p>
              <p className="description">{char.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
