const WhyChoose = () => {
  const features = [
    {
      title: "Deep personalization that fits you",
      description:
        "Plans respect your dislikes, time, tools, and basic nutrition targets, so the weekly menu feels realistic and easy to follow.",
      image: 'https://shorturl.at/aacyx'
    },
    {
      title: "Built for real life, not food blogs",
      description:
        "Fast, simple recipes with common supermarket ingredients—no rare products or hour-long steps, just meals you can actually cook.",
      image: "https://shorturl.at/RO3Il",
    },
    {
      title: "Grocery lists and meal prep built in",
      description:
        "Auto-grouped shopping lists and batch-friendly scheduling reduce decisions during the week and make sticking to the plan simpler.",
      image: "https://shorturl.at/Wyduj",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why choose PlanEat AI?
          </h2>
          <p className="mt-3 text-gray-500 text-lg">
            Make healthy eating easier to stick to
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition"
            >
              {/* Image */}
              <div className="h-56 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
