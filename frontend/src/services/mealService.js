import axios from "axios";

const API_URL = "https://ai-meal-planner-yui1.onrender.com/meals";

export const fetchMealHistory = async (token) => {
  const res = await axios.get(`${API_URL}/history`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data.meals;
};
