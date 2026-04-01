const people = [
  {
    title: "Busy professionals",
    desc: "You want quick, realistic meals with a smart list you can shop once and cook on autopilot.",
    img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61",
  },
  {
    title: "Families and couples",
    desc: "Plan shared meals, scale portions, and keep variety without complicated prep or hard-to-find ingredients.",
    img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
  },
  {
    title: "Weight loss or weight gain goals",
    desc: "Hit practical calorie and protein targets with meals that stay satisfying and easy to repeat weekly.",
    img: "https://shorturl.at/2kz2M",
  },
  {
    title: "Athletes and active people",
    desc: "Keep protein high, plan carbs around training, and batch staples so recovery meals are always ready.",
    img: "https://shorturl.at/lWUp4",
  },
  {
    title: "People with many food dislikes",
    desc: "Exclude ingredients you won’t eat and get swaps that keep the menu realistic for your tastes.",
    img: "https://images.unsplash.com/photo-1543352634-99a5d50ae78e",
  },
  {
    title: "Beginners to meal planning",
    desc: "Start with simple templates, grouped grocery lists, and light prep that builds a weekly rhythm.",
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
  },
];

const WhoItsFor = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          Who it’s for
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-14">
          Designed for everyday cooks who want realistic weekly plans,
          easy recipes, and structure for weight or training goals.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {people.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6 text-left">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhoItsFor;
