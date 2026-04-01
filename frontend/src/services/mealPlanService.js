import api from "./api";

/* =========================
   Generate Meal Plan
========================= */
export const generateMealPlan = async (prefs) => {
  const res = await api.post("/api/mealplan/generate", prefs);
  return res.data.data;
};

/* =========================
   Swap Meal
========================= */
export const swapMeal = async (payload) => {
  const res = await api.post("/api/mealplan/swap", payload);
  return res.data.data;
};

/* =========================
   GET MEAL HISTORY
========================= */
export const getMealHistory = async () => {
  const res = await api.get("/api/mealplan/history");
  return res.data.data;
};

/* =========================
   DELETE MEAL PLAN
========================= */
export const deleteMealPlan = async (id) => {
  await api.delete(`/api/mealplan/${id}`);
};