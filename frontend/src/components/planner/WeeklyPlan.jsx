const WeeklyPlan = ({ mealPlan, onSwapMeal }) => {
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-6">
        Your Weekly Meal Plan 🍽️
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {mealPlan.map((dayPlan) => (
          <div
            key={dayPlan.day}
            className="bg-white rounded-xl shadow-md p-6"
          >
            <h3 className="text-xl font-semibold text-green-600 mb-4">
              {dayPlan.day}
            </h3>

            {/* Meals */}
            {Object.entries(dayPlan.meals).map(
              ([mealType, meal]) => (
                <div
                  key={mealType}
                  className="flex items-start justify-between mb-4"
                >
                  <div>
                    <p className="capitalize font-medium text-gray-700">
                      {mealType}
                    </p>
                    <p className="text-gray-600">
                      {meal.name}
                    </p>
                  </div>

                  {/* Swap Button */}
                  <button
                    onClick={() =>
                      onSwapMeal(dayPlan.day, mealType)
                    }
                    className="text-sm text-green-600 hover:underline ml-4"
                  >
                    🔄 Swap
                  </button>
                </div>
              )
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyPlan;
