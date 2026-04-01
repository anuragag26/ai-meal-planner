import express from "express";
import cors from "cors";

import mealPlanRoutes from "./routes/mealPlanRoutes.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();

/* =========================
   Global Middlewares
========================= */

// Enable CORS (frontend ↔ backend)
const allowedOrigins = [
  "http://localhost:5173",
  "https://ai-meal-planner-mocha-nu.vercel.app",
  "https://ai-meal-planner-39nun7vbw-anurag-agrawals-projects.vercel.app"
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("CORS not allowed"));
      }
    },
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
