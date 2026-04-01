import express from "express";
import cors from "cors";

import mealPlanRoutes from "./routes/mealPlanRoutes.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();

/* =========================
   Global Middlewares
========================= */

// Enable CORS (frontend ↔ backend)
app.use(
  cors({
    origin: "http://localhost:5173", // Vite frontend
    credentials: true,
  })
);

// Parse JSON bodies
app.use(express.json());

/* =========================
   Health Check Route
========================= */
app.get("/", (req, res) => {
  res.json({ status: "API running 🚀" });
});

/* =========================
   API Routes
========================= */
app.use("/api/auth", authRoutes);
app.use("/api/mealplan", mealPlanRoutes);

/* =========================
   404 Handler
========================= */
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

export default app;
