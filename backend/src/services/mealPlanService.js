import axios from "axios";

export const generateMealPlan = async (preferences) => {
  const res = await axios.post(
    "http://localhost:5000/api/mealplan",
    preferences
  );
  return res.data.data;
};
