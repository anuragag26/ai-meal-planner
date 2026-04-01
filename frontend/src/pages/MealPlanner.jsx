import { useState } from "react";
import PreferenceForm from "../components/planner/PreferenceForm";
import WeeklyPlan from "../components/planner/WeeklyPlan";
import ShoppingList from "../components/shopping/ShoppingList";
import Loader from "../components/common/Loader";
import {
  generateMealPlan,
  swapMeal,
} from "../services/mealPlanService";

const MealPlanner = () => {
  const [loading, setLoading] = useState(false);
  const [mealPlan, setMealPlan] = useState([]);
  const [preferences, setPreferences] = useState(null);

  /* =========================
     Generate Full Meal Plan
  ========================= */
const handleGenerate = async (prefs) => {
  try {
    setLoading(true);
    setPreferences(prefs);

    const aiData = await generateMealPlan(prefs);

    // ✅ SAFETY CHECK
    if (!aiData?.week || !Array.isArray(aiData.week)) {
      throw new Error("Invalid AI response format");
    }

    setMealPlan(aiData.week);
  } catch (error) {
    alert("AI generation failed 😢");
    console.error("Meal plan error:", error);
    setMealPlan([]); // 🔒 prevent crash
  } finally {
    setLoading(false);
  }
};


  /* =========================
     Swap Individual Meal (AI)
  ========================= */
  const handleSwapMeal = async (day, mealType) => {
    try {
      const existingMeals = mealPlan.flatMap((d) =>
        Object.values(d.meals).map((m) => m.name)
      )

      const res = await swapMeal({
        day,
        mealType,
        existingMeals,
        ...preferences,
      });

      const { meal, ingredients } = res;

      setMealPlan((prev) =>
        prev.map((d) =>
          d.day === day
            ? {
                ...d,
                meals: {
                  ...d.meals,
                  [mealType]: {
                    name: meal,
                    ingredients,
                  },
                },
              }
            : d
        )
      );
    } catch (error) {
      alert("Meal swap failed 😢");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-center mb-10">
          AI Meal Planner
        </h1>

        <PreferenceForm onGenerate={handleGenerate} />

        {loading && <Loader />}

        {!loading && mealPlan.length > 0 && (
          <>
            <WeeklyPlan
              mealPlan={mealPlan}
              onSwapMeal={handleSwapMeal}
            />
            <ShoppingList mealPlan={mealPlan} />
          </>
        )}
      </div>
    </div>
  );
};

export default MealPlanner;
