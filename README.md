# Anime Workout Routine - Build Your Body

A web application to build muscles inspired by anime characters using pure calisthenics exercises.

## Features

- **8 Anime Characters**: Train like Goku, All Might, Saitama, Asta, Sung Jinwoo, Tanjiro, Luffy, and Naruto
- **Monthly Routines**: 4-week training cycles that repeat and progressively increase in difficulty
- **Pure Calisthenics**: All exercises use body weight only - no equipment needed
- **Smart Scheduling**: Different exercises for each day of the week, no repeats until the next cycle
- **Rest Days**: Built-in recovery days in the routine
- **Progression Levels**: Adjust difficulty from Beginner to Master as you improve
- **Activity Tracking**: Log your workouts and view activity history on calendar
- **Pause/Resume**: Ability to pause exercises during training
- **Profile Stats**: Track total workouts, current streak, and unlock achievements
- **Beautiful Animations**: Smooth transitions without requiring external data

## Project Structure

```
build-your-body/
├── src/
│   ├── components/
│   │   ├── Home.jsx                 # Landing page with features overview
│   │   ├── CharacterSelector.jsx    # Character selection dropdown
│   │   ├── ExerciseTracker.jsx      # Main exercise tracking interface
│   │   ├── Profile.jsx              # User profile with stats and achievements
│   │   └── NavBar.jsx               # Bottom navigation bar
│   ├── data/
│   │   └── workoutData.js           # Workout routines and character data
│   ├── styles/
│   │   ├── global.css               # Global styles
│   │   ├── animations.css           # Reusable animations
│   │   ├── navbar.css               # Navigation styles
│   │   ├── characterSelector.css    # Character selector styles
│   │   ├── exerciseTracker.css      # Exercise tracker styles
│   │   ├── profile.css              # Profile page styles
│   │   ├── home.css                 # Home page styles
│   ├── App.jsx                      # Main App component
│   ├── App.css                      # App layout styles
│   └── main.jsx                     # React entry point
├── index.html                       # HTML entry point
├── vite.config.js                   # Vite configuration
├── package.json                     # Dependencies
└── README.md                        # This file
```

## Available Characters

1. **Goku** (Dragon Ball Z) - Pure strength and endurance
2. **All Might** (My Hero Academia) - Explosive power and defense
3. **Saitama** (One Punch Man) - Balanced strength and speed
4. **Asta** (Black Clover) - Speed and agility focus
5. **Sung Jinwoo** (Solo Leveling) - Speed and precision strength
6. **Tanjiro** (Demon Slayer) - Core strength and flexibility
7. **Luffy** (One Piece) - Explosive power and recovery
8. **Naruto** (Naruto) - Stamina and full body conditioning

## Weekly Workout Schedule

- **Monday**: Chest and Triceps
- **Tuesday**: Back and Biceps
- **Wednesday**: Legs and Core
- **Thursday**: Rest Day
- **Friday**: Chest and Triceps (Variation)
- **Saturday**: Legs and Glutes
- **Sunday**: Rest Day

## Installation

1. Clone the repository
```bash
git clone https://github.com/Derrick-Star/build-your-body.git
cd build-your-body
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Usage

1. Open the application in your browser
2. Select your favorite anime character from the character selector
3. Navigate to "Current Exercise" to start your workout
4. Choose your progression level (Beginner, Intermediate, Advanced, Master)
5. Follow the daily exercise routine
6. Log your workouts and track progress in your Profile
7. View achievements as you complete milestones

## Features Explained

### Character Selection
Switch between different anime characters at any time. Each character has a unique training philosophy and description. Your progress is saved regardless of which character you're training as.

### Exercise Tracking
- Track sets and reps in real-time
- Rest timer between sets
- Pause/Resume functionality during workouts
- View current set progress
- Move to next exercise automatically

### Progression System
- **Beginner** (1x multiplier): Start your journey
- **Intermediate** (1.25x multiplier): Building consistency
- **Advanced** (1.5x multiplier): Pushing your limits
- **Master** (2x multiplier): Peak performance

### Activity Log
- Calendar view of completed workouts
- Current workout streak tracking
- Total workouts completed

### Achievements
- **First Step**: Complete 1 workout
- **Consistency**: Complete 10 workouts
- **Dedicated**: Complete 30 workouts
- **Weekly Warrior**: Achieve 7-day streak

## Calisthenics Exercises Included

### Chest & Triceps:
- Push-ups
- Diamond Push-ups
- Wide Push-ups
- Dips
- Tricep Dips
- Pike Push-ups

### Back & Biceps:
- Pull-ups
- Chin-ups
- Inverted Rows

### Legs & Core:
- Squats
- Lunges
- Single Leg Squats
- Jump Squats
- Bulgarian Split Squats
- Planks

## Technologies Used

- **React 18**: Modern UI library
- **Vite**: Lightning-fast build tool
- **CSS3**: Advanced styling and animations
- **LocalStorage API**: Data persistence

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Future Enhancements

- Custom exercise routine builder
- Video demonstrations of exercises
- Form correction using camera/AI
- Social sharing of achievements
- Export workout history
- Advanced analytics dashboard
- Mobile app version

## Contributing

Feel free to fork this project and submit pull requests with improvements.

## License

MIT License

## Contact

For questions or suggestions, please reach out to the project maintainers.

---

**Train hard, become stronger, and build your body like your favorite anime character!**
