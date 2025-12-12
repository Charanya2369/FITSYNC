export const FitnessEngine = {
  calculateBMI: (height, weight) => {
    if (!height || !weight) return null;
    const h = height / 100; 
    return (weight / (h * h)).toFixed(1);
  },
  getFitnessLevel: (bmi) => {
    if (!bmi) return "unknown";
    if (bmi < 18.5) return "underweight";
    if (bmi >= 18.5 && bmi <= 24.9) return "healthy";
    if (bmi >= 25 && bmi <= 29.9) return "overweight";
    return "obese";
  },
  getDietPlan: (level) => {
    switch (level) {
      case "underweight":
        return "Increase protein & calorie intake, add strength training.";
      case "healthy":
        return "Maintain balanced diet and regular exercise.";
      case "overweight":
        return "Lower calories, increase fiber, start moderate cardio.";
      case "obese":
        return "Consult a nutritionist, begin low-impact workouts.";
      default:
        return "No data available.";
    }
  },
  getWorkoutPlan: (level) => {
    switch (level) {
      case "underweight":
        return "Strength training 3–4 days/week.";
      case "healthy":
        return "Mix of cardio + strength 4–5 days/week.";
      case "overweight":
        return "Cardio workouts 30 mins/day, 5 days/week.";
      case "obese":
        return "Low-impact workouts like walking, cycling, swimming.";
      default:
        return "No suggestions available.";
    }
  },
};
