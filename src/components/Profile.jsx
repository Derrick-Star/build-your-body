import React from 'react';
import '../styles/profile.css';

function Profile({ selectedCharacter, activityLog }) {
  const totalWorkouts = activityLog.length;
  const currentStreak = calculateStreak(activityLog);
  const level = calculateLevel(totalWorkouts);

  function calculateStreak(log) {
    if (log.length === 0) return 0;
    let streak = 1;
    const sortedLog = [...log].sort().reverse();
    const today = new Date();
    
    for (let i = 0; i < sortedLog.length - 1; i++) {
      const current = new Date(sortedLog[i]);
      const next = new Date(sortedLog[i + 1]);
      const diffTime = current - next;
      const diffDays = diffTime / (1000 * 60 * 60 * 24);
      
      if (diffDays === 1) {
        streak++;
      } else {
        break;
      }
    }
    return streak;
  }

  function calculateLevel(workouts) {
    if (workouts < 10) return 'Beginner';
    if (workouts < 30) return 'Intermediate';
    if (workouts < 60) return 'Advanced';
    return 'Master';
  }

  return (
    <div className="profile-container animate-fadeIn">
      <div className="profile-header">
        <h2>Your Profile</h2>
        <p className="character-info">{selectedCharacter.name} - {selectedCharacter.anime}</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card animate-slideInUp">
          <h3>Total Workouts</h3>
          <p className="stat-value">{totalWorkouts}</p>
          <span className="stat-label">Sessions Completed</span>
        </div>

        <div className="stat-card animate-slideInUp">
          <h3>Current Streak</h3>
          <p className="stat-value">{currentStreak}</p>
          <span className="stat-label">Days Active</span>
        </div>

        <div className="stat-card animate-slideInUp">
          <h3>Your Level</h3>
          <p className="stat-value">{level}</p>
          <span className="stat-label">{workouts} Workouts</span>
        </div>

        <div className="stat-card animate-slideInUp">
          <h3>Character Path</h3>
          <p className="stat-value">{selectedCharacter.name}</p>
          <span className="stat-label">{selectedCharacter.description}</span>
        </div>
      </div>

      <div className="progress-section">
        <h3>Workout History</h3>
        {activityLog.length > 0 ? (
          <div className="calendar-grid">
            {activityLog.map((date, index) => (
              <div key={index} className="calendar-day">
                {date}
              </div>
            ))}
          </div>
        ) : (
          <p className="no-data">No workouts recorded yet. Start your journey today!</p>
        )}
      </div>

      <div className="achievements">
        <h3>Achievements</h3>
        <div className="achievement-grid">
          <div className={`achievement ${totalWorkouts >= 1 ? 'unlocked' : 'locked'}`}>
            <span>First Step</span>
            <p>Complete 1 workout</p>
          </div>
          <div className={`achievement ${totalWorkouts >= 10 ? 'unlocked' : 'locked'}`}>
            <span>Consistency</span>
            <p>Complete 10 workouts</p>
          </div>
          <div className={`achievement ${totalWorkouts >= 30 ? 'unlocked' : 'locked'}`}>
            <span>Dedicated</span>
            <p>Complete 30 workouts</p>
          </div>
          <div className={`achievement ${currentStreak >= 7 ? 'unlocked' : 'locked'}`}>
            <span>Weekly Warrior</span>
            <p>7 day streak</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
