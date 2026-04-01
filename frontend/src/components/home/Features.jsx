const features = [
  "Personalized AI Meal Plans",
  "Automatic Grocery Lists",
  "Diet & Allergy Friendly",
  "Free to Use (Gemini AI)",
  "No App Download Needed",
  "Save & Reuse Plans"
];

const Features = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900">
          Why Use Our AI Meal Planner?
        </h2>

        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition"
            >
              <p className="text-gray-800 font-medium">
                ✅ {feature}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
