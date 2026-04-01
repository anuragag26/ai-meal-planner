const steps = [
  {
    title: "Tell Us Your Preferences",
    desc: "Diet, allergies, calories, and food dislikes."
  },
  {
    title: "AI Creates Your Plan",
    desc: "Weekly meals tailored exactly to your goals."
  },
  {
    title: "Get Grocery List",
    desc: "Auto-generated shopping list ready to use."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          How It Works
        </h2>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="p-8 border rounded-xl hover:shadow-lg transition"
            >
              <div className="text-green-600 text-3xl font-bold mb-4">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                {step.title}
              </h3>
              <p className="mt-3 text-gray-600">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
