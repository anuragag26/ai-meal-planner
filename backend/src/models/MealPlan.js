import mongoose from "mongoose";

const mealSchema = new mongoose.Schema({
  name: String,
  ingredients: [String],
});

const daySchema = new mongoose.Schema({
  day: String,
  meals: {
    breakfast: mealSchema,
    lunch: mealSchema,
    dinner: mealSchema,
  },
});

const mealPlanSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    preferences: {
      diet: String,
      allergies: String,
      dislikes: String,
      calories: Number,
    },
    week: [daySchema],
  },
  { timestamps: true }
);

export default mongoose.model("MealPlan", mealPlanSchema);
