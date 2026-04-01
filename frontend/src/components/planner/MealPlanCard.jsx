const MealPlanCard = ({ data, index, onSwap }) => {
  const { day, meals } = data;

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="text-xl font-semibold text-green-600 mb-4">
        {day}
      </h3>

      {Object.entries(meals).map(([type, meal]) => (
        <div key={type} className="mb-3">
          <p className="text-gray-700">
            <strong>{type}:</strong> {meal}
          </p>
          <button
            onClick={() => onSwap(index, type)}
            className="text-sm text-green-600 hover:underline mt-1"
          >
            🔄 Swap {type}
          </button>
        </div>
      ))}
    </div>
  );
};

export default MealPlanCard;
