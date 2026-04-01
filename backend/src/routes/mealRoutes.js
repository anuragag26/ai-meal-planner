import express from "express";
import { getMealHistory } from "../controllers/mealController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/history", protect, getMealHistory);

export default router;
