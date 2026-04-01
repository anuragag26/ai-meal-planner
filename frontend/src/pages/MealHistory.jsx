import { useEffect, useState } from "react";
import { getMealHistory, deleteMealPlan } from "../services/mealPlanService";

const MealHistory = () => {
  const [plans, setPlans] = useState([]);
  const [expandedId, setExpandedId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const data = await getMealHistory();
        setPlans(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);

  if (loading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this meal plan?",
    );

    if (!confirmDelete) return;

    try {
      // 👇 trigger animation
      setDeletingId(id);

      // wait for animation to finish
      setTimeout(async () => {
        await deleteMealPlan(id);

        setPlans((prev) => prev.filter((plan) => plan._id !== id));

        if (expandedId === id) setExpandedId(null);

        setDeletingId(null);
      }, 300); // animation duration
    } catch (error) {
      alert("Failed to delete meal plan 😢");
      console.error(error);
      setDeletingId(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-3xl font-bold mb-10 text-center">Meal History</h1>
        {plans.length === 0 ? (
          <p className="text-center text-gray-500">
            No meal plans generated yet.
          </p>
        ) : (
          <div className="space-y-6">
            {plans.map((plan) => (
              <div
                key={plan._id}
                className={`bg-white p-6 rounded-lg shadow
    transition-all duration-300 ease-in-out
    ${
      deletingId === plan._id
        ? "opacity-0 translate-y-4"
        : "opacity-100 translate-y-0"
    }
  `}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500">
                      Generated on {new Date(plan.createdAt).toLocaleString()}
                    </p>

                    <p className="font-semibold mt-1">
                      Diet: {plan.preferences.diet} | Calories:{" "}
                      {plan.preferences.calories}
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <button
                      onClick={() =>
                        setExpandedId(expandedId === plan._id ? null : plan._id)
                      }
                      className="text-green-600 font-semibold"
                    >
                      {expandedId === plan._id ? "Hide Plan" : "View Plan"}
                    </button>

                    <button
                      onClick={() => handleDelete(plan._id)}
                      className="text-red-500 font-semibold hover:text-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </div>

                {/* Expanded weekly plan */}
                {expandedId === plan._id && (
                  <div className="mt-6 space-y-4">
                    {plan.week.map((dayPlan) => (
                      <div key={dayPlan.day}>
                        <h3 className="font-bold text-lg mb-2">
                          {dayPlan.day}
                        </h3>

                        <div className="grid md:grid-cols-3 gap-4">
                          {Object.entries(dayPlan.meals).map(
                            ([mealType, meal]) => (
                              <div
                                key={mealType}
                                className="border rounded p-3"
                              >
                                <p className="font-semibold capitalize">
                                  {mealType}
                                </p>
                                <p className="mt-1">{meal.name}</p>

                                <ul className="text-sm text-gray-600 list-disc ml-4 mt-2">
                                  {meal.ingredients.map((ing, i) => (
                                    <li key={i}>{ing}</li>
                                  ))}
                                </ul>
                              </div>
                            ),
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MealHistory;
