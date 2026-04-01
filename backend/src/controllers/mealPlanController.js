import buildPrompt from "../utils/buildPrompt.js";
import { generateMealPlanAI } from "../config/ai.js";
import MealPlan from "../models/MealPlan.js";

/* =========================
   Generate Full Meal Plan
========================= */
export const generateMealPlan = async (req, res) => {
  try {
    const prompt = buildPrompt(req.body);
    let text = await generateMealPlanAI(prompt);

    text = text.replace(/```json|```/g, "").trim();
    const parsed = JSON.parse(text);

    // 🔥 SAVE TO DB
    const savedPlan = await MealPlan.create({
      user: req.user._id,          // from auth middleware
      preferences: {
        diet: req.body.diet,
        allergies: req.body.allergies,
        dislikes: req.body.dislikes,
        calories: req.body.calories,
      },
      week: parsed.week,
    });

    res.status(201).json({
      success: true,
      data: savedPlan,
    });
  } catch (error) {
    console.error("AI ERROR:", error);
    res.status(500).json({
      success: false,
      message: "AI generation failed",
    });
  }
};


/* =========================
   Swap Single Meal
========================= */
export const swapMeal = async (req, res) => {
  try {
    const {
      day,
      mealType,
      diet,
      allergies,
      dislikes,
      calories,
      existingMeals,
    } = req.body;

    const avoidList = existingMeals.join(", ");

    const prompt = `
Generate ONE ${mealType} meal for ${day}.

Rules:
- Diet: ${diet}
- Allergies: ${allergies || "none"}
- Dislikes: ${dislikes || "none"}
- Calories: ${Math.floor(calories / 3)}
- Do NOT repeat: ${avoidList}

Return JSON only:
{
  "meal": "Meal name",
  "ingredients": ["item1", "item2"]
}
`;

    let text = await generateMealPlanAI(prompt);
    text = text.replace(/```json|```/g, "").trim();

    const parsed = JSON.parse(text);

    res.json({
      success: true,
      data: parsed,
    });
  } catch (error) {
    console.error("SWAP ERROR:", error.message);
    res.status(500).json({
      success: false,
      message: "Meal swap failed",
    });
  }
};

/* =========================
   Get Meal History (User)
========================= */
export const getMealHistory = async (req, res) => {
  try {
    const plans = await MealPlan.find({ user: req.user })
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      data: plans,
    });
  } catch (error) {
    console.error("MEAL HISTORY ERROR:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch meal history",
    });
  }
};

/* =========================
   DELETE MEAL PLAN
========================= */
export const deleteMealPlan = async (req, res) => {
  try {
    const { id } = req.params;

    const mealPlan = await MealPlan.findOne({
      _id: id,
      user: req.user._id, // 🔐 security check
    });

    if (!mealPlan) {
      return res.status(404).json({
        success: false,
        message: "Meal plan not found",
      });
    }

    await mealPlan.deleteOne();

    res.json({
      success: true,
      message: "Meal plan deleted successfully",
    });
  } catch (error) {
    console.error("DELETE MEAL PLAN ERROR:", error);
    res.status(500).json({
      success: false,
      message: "Failed to delete meal plan",
    });
  }
};
