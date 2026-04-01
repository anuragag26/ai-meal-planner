import jsPDF from "jspdf";

const ShoppingList = ({ mealPlan }) => {
  // 🔥 Derive grocery list from mealPlan
  const groceryList = Array.from(
    new Set(
      mealPlan.flatMap((day) =>
        Object.values(day.meals).flatMap(
          (meal) => meal.ingredients || []
        )
      )
    )
  );

  const exportToPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Grocery List", 14, 20);

    doc.setFontSize(12);
    let y = 30;

    groceryList.forEach((item, index) => {
      doc.text(`${index + 1}. ${item}`, 14, y);
      y += 8;

      if (y > 280) {
        doc.addPage();
        y = 20;
      }
    });

    doc.save("grocery-list.pdf");
  };

  if (groceryList.length === 0) return null;

  return (
    <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">
          Grocery List 🛒
        </h2>

        <button
          onClick={exportToPDF}
          className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700"
        >
          Export PDF
        </button>
      </div>

      <ul className="grid sm:grid-cols-2 gap-4">
        {groceryList.map((item, index) => (
          <li
            key={index}
            className="bg-gray-50 p-3 rounded-lg"
          >
            ✅ {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
