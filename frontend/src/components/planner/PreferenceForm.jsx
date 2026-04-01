import { useState } from "react";

const PreferenceForm = ({ onGenerate }) => {
  const [formData, setFormData] = useState({
    diet: "",
    allergies: "",
    dislikes: "",
    calories: "",
    mealsPerDay: "3",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerate(formData); // send data to parent
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl shadow-lg p-8 space-y-6"
    >
      {/* Diet */}
      <div>
        <label className="block font-medium text-gray-700 mb-2">
          Diet Type
        </label>
        <select
          name="diet"
          value={formData.diet}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500"
          required
        >
          <option value="">Select diet</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="vegan">Vegan</option>
          <option value="non-veg">Non-Vegetarian</option>
          <option value="keto">Keto</option>
        </select>
      </div>

      {/* Allergies */}
      <label className="block font-medium text-gray-700 mb-2">
          Allergies
        </label>
      <input
        type="text"
        name="allergies"
        placeholder="Allergies (optional)"
        value={formData.allergies}
        onChange={handleChange}
        className="w-full border rounded-lg px-4 py-2"
      />

      {/* Dislikes */}
      <label className="block font-medium text-gray-700 mb-2">
          Dislikes
        </label>
      <input
        type="text"
        name="dislikes"
        placeholder="Dislikes (optional)"
        value={formData.dislikes}
        onChange={handleChange}
        className="w-full border rounded-lg px-4 py-2"
      />

      {/* Calories */}
      <label className="block font-medium text-gray-700 mb-2">
          Calories
        </label>
      <input
        type="number"
        name="calories"
        placeholder="Daily Calories"
        value={formData.calories}
        onChange={handleChange}
        className="w-full border rounded-lg px-4 py-2"
        required
      />


      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700"
      >
        Generate Meal Plan
      </button>
    </form>
  );
};

export default PreferenceForm;
