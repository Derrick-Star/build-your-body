export const characters = [
  {
    id: 1,
    name: 'Goku',
    anime: 'Dragon Ball Z',
    description: 'Pure strength and endurance'
  },
  {
    id: 2,
    name: 'All Might',
    anime: 'My Hero Academia',
    description: 'Explosive power and defense'
  },
  {
    id: 3,
    name: 'Saitama',
    anime: 'One Punch Man',
    description: 'Balanced strength and speed'
  },
  {
    id: 4,
    name: 'Asta',
    anime: 'Black Clover',
    description: 'Speed and agility focus'
  },
  {
    id: 5,
    name: 'Sung Jinwoo',
    anime: 'Solo Leveling',
    description: 'Speed and precision strength'
  },
  {
    id: 6,
    name: 'Tanjiro',
    anime: 'Demon Slayer',
    description: 'Core strength and flexibility'
  },
  {
    id: 7,
    name: 'Luffy',
    anime: 'One Piece',
    description: 'Explosive power and recovery'
  },
  {
    id: 8,
    name: 'Naruto',
    anime: 'Naruto',
    description: 'Stamina and full body conditioning'
  }
];

export const weeklyRoutine = {
  Monday: {
    name: 'Monday',
    focus: 'Chest and Triceps',
    exercises: [
      { name: 'Push-ups', sets: 3, reps: 10, restSeconds: 60 },
      { name: 'Dips (using chair)', sets: 3, reps: 8, restSeconds: 60 },
      { name: 'Diamond Push-ups', sets: 3, reps: 8, restSeconds: 60 }
    ]
  },
  Tuesday: {
    name: 'Tuesday',
    focus: 'Back and Biceps',
    exercises: [
      { name: 'Pull-ups', sets: 3, reps: 8, restSeconds: 60 },
      { name: 'Inverted Rows', sets: 3, reps: 10, restSeconds: 60 },
      { name: 'Chin-ups', sets: 3, reps: 8, restSeconds: 60 }
    ]
  },
  Wednesday: {
    name: 'Wednesday',
    focus: 'Legs and Core',
    exercises: [
      { name: 'Squats', sets: 3, reps: 15, restSeconds: 60 },
      { name: 'Lunges', sets: 3, reps: 12, restSeconds: 60 },
      { name: 'Planks', sets: 3, duration: 45, restSeconds: 60 }
    ]
  },
  Thursday: {
    name: 'Thursday',
    focus: 'Rest Day',
    exercises: []
  },
  Friday: {
    name: 'Friday',
    focus: 'Chest and Triceps',
    exercises: [
      { name: 'Wide Push-ups', sets: 3, reps: 12, restSeconds: 60 },
      { name: 'Tricep Dips', sets: 3, reps: 10, restSeconds: 60 },
      { name: 'Pike Push-ups', sets: 3, reps: 8, restSeconds: 60 }
    ]
  },
  Saturday: {
    name: 'Saturday',
    focus: 'Legs and Glutes',
    exercises: [
      { name: 'Single Leg Squats', sets: 3, reps: 8, restSeconds: 60 },
      { name: 'Jump Squats', sets: 3, reps: 12, restSeconds: 60 },
      { name: 'Bulgarian Split Squats', sets: 3, reps: 10, restSeconds: 60 }
    ]
  },
  Sunday: {
    name: 'Sunday',
    focus: 'Rest Day',
    exercises: []
  }
};

export const progressionLevels = {
  beginner: {
    level: 1,
    multiplier: 1,
    description: 'Just starting your journey'
  },
  intermediate: {
    level: 2,
    multiplier: 1.25,
    description: 'Building consistency'
  },
  advanced: {
    level: 3,
    multiplier: 1.5,
    description: 'Pushing your limits'
  },
  master: {
    level: 4,
    multiplier: 2,
    description: 'Peak performance'
  }
};
