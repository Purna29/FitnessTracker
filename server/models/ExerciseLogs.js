const exerciseTypes = [
    { type: "Inchworm" },
    { type: "Tuck jump" },
    { type: "Bear crawl" },
    { type: "Standard push-up" },
    { type: "Handstand push-up" },
    { type: "Triceps dip" },
    { type: "Bicycle" },
    { type: "Side plank" },
    { type: "Crunch" },
    { type: "Single-leg deadlift" },
    { type: "dumbbell bench-press" },
    { type: "chest fly" },
    { type: "Triceps (back of arms)" }
  
  ];
  const exerciseLogs = [
    {
      exercise: "Inchworm",
 
      reps: 12,
      cal: 15,
      result:1200
  
    },
    {
   
    
      exercise: "Bear crawl",
      cal: 18,
      reps: 13,
      result:1000
    
    },
    {
   
    
      exercise: "Side plank",
      cal: 12,
      reps: 11,
      result:1100
    
    },
    {
   
    
      exercise: "dumbbell bench-press",
      cal: 23,
      reps: 20,
      result:1300
    
    },
    {
   
    
      exercise: "Crunch",
      cal: 19,
      reps: 11,
      result:1400
    
    },
    {
   
    
      exercise: "Standard push-up",
      cal: 18,
      reps: 11,
      result:1200
    
    },
  ]; 
    
      
  
  const getExerciseLogs = () => {
    return exerciseLogs;
  };
  
  const getExerciseTypes = () => {
    return exerciseTypes;
  }
  
  const addExerciseLogs = (exercise) => {
    exerciseLogs.push(exercise);
    return exerciseLogs;
  };
  
  module.exports = {
    getExerciseTypes,
    getExerciseLogs,
    addExerciseLogs,

 };
  