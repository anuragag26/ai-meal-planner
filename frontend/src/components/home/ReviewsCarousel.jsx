import { useEffect, useState } from "react";

const reviews = [
  {
    title: "Love this individual experience!",
    text: "I am happy to find this app, and now I have my own personal weight loss meal plan for each week without peppers, lentils, and other foods I don't like 😊",
    author: "Diana Lazarieva",
    date: "Sep 3",
    rating: 5,
  },
  {
    title: "AMAZING",
    text: "A really cool app with interesting and simple recipes. I especially like that there’s a shopping list. Big like for the design, I really enjoy it!",
    author: "Yana Kisnichan",
    date: "Sep 4",
    rating: 5,
  },
  {
    title: "Easy to use",
    text: "Great tool to plan everyday meals",
    author: "AltruistSD",
    date: "Sep 10",
    rating: 5,
  },
  {
    title: "Finally consistent meals",
    text: "This helped me stop overthinking food every day. The plans are realistic and easy to follow.",
    author: "Mark T.",
    date: "Sep 14",
    rating: 5,
  },
  {
    title: "Perfect for busy weeks",
    text: "Shopping lists alone save me so much time. I plan once and I’m done for the week.",
    author: "Emily R.",
    date: "Sep 18",
    rating: 5,
  },
  {
    title: "Simple & smart",
    text: "No complicated recipes. Just food I actually cook. That’s why it works.",
    author: "Daniel K.",
    date: "Sep 22",
    rating: 5,
  },
];

const ReviewsCarousel = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // 🔁 Auto slide
  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [paused]);

  const prev = () => {
    setPaused(true);
    setIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const next = () => {
    setPaused(true);
    setIndex((prev) => (prev + 1) % reviews.length);
  };

  const visibleReviews = [
    reviews[index],
    reviews[(index + 1) % reviews.length],
    reviews[(index + 2) % reviews.length],
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Verified reviews from the App Store
            </h2>
            <p className="mt-2 text-gray-500">
              Real stories from people who plan weekly — and stick to it
            </p>
          </div>

          <div className="text-right">
            <div className="flex items-center gap-2 text-xl font-semibold">
              ⭐ <span>5.0</span>
              <span className="text-sm text-gray-500">12 RATINGS</span>
            </div>
            <p className="text-sm mt-1">
              Source:{" "}
              <span className="text-blue-600 underline cursor-pointer">
                App Store
              </span>
            </p>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={prev}
            className="absolute -left-6 top-1/2 -translate-y-1/2 text-3xl text-gray-400 hover:text-gray-600"
          >
            ‹
          </button>

          {/* Right Arrow */}
          <button
            onClick={next}
            className="absolute -right-6 top-1/2 -translate-y-1/2 text-3xl text-gray-400 hover:text-gray-600"
          >
            ›
          </button>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visibleReviews.map((review, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-xl p-6 min-h-57.5 transition-all"
              >
                <div className="flex justify-between text-sm text-gray-400 mb-2">
                  <span>{review.title}</span>
                  <span>{review.date}</span>
                </div>

                <div className="text-yellow-500 mb-3">
                  {"★".repeat(review.rating)}
                </div>

                <p className="text-gray-700 text-sm leading-relaxed mb-6">
                  {review.text}
                </p>

                <p className="text-sm text-gray-500">{review.author}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsCarousel;
