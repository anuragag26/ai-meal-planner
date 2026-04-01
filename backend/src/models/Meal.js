import mongoose from "mongoose";

const mealSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    goal: String,
    calories: Number,
    meals: [String],
  },
  { timestamps: true }
);

export default mongoose.model("Meal", mealSchema);
