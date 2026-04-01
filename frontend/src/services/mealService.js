import axios from "axios";

const API_URL = "http://localhost:5000/api/meals";

export const fetchMealHistory = async (token) => {
  const res = await axios.get(`${API_URL}/history`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data.meals;
};
