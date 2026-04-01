import express from "express";
import {
  generateMealPlan,
  swapMeal,
  getMealHistory,
  deleteMealPlan,
} from "../controllers/mealPlanController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/generate", protect, generateMealPlan);
router.post("/swap", protect, swapMeal);
router.get("/history", protect, getMealHistory);
router.delete("/:id", protect, deleteMealPlan);

export default router;
