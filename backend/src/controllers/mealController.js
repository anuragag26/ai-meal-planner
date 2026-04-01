import MealPlan from "../models/MealPlan.js";

export const getMealHistory = async (req, res) => {
  try {
    const plans = await MealPlan.find({ user: req.user._id })
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      meals: plans,
    });
  } catch (error) {
    console.error("MEAL HISTORY ERROR:", error);
    res.status(500).json({ message: "Failed to fetch meal history" });
  }
};
