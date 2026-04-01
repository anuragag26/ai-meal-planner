import { useState } from "react";

const faqs = [
  {
    question: "What makes PlanEat unique?",
    answer:
      "PlanEat focuses on realistic, everyday meals tailored to your preferences, lifestyle, and goals — not complicated diets or generic plans.",
  },
  {
    question: "Why should a person choose PlanEat over its competitors?",
    answer:
      "Unlike most planners, PlanEat avoids over-complicated recipes, supports food dislikes, and creates practical grocery lists you can actually shop from.",
  },
  {
    question: "What’s the story behind PlanEat?",
    answer:
      "PlanEat was built to solve daily decision fatigue around meals — helping people eat better without spending hours planning every week.",
  },
  {
    question: "Can I specify allergies or foods I don’t eat?",
    answer:
      "Yes. You can specify allergies, dislikes, and dietary preferences, and PlanEat will automatically exclude them from your meal plans.",
  },
  {
    question: "Can I customize the generated meals?",
    answer:
      "Absolutely. You can swap meals, regenerate individual dishes, and tailor plans until they fit your taste perfectly.",
  },
  {
    question: "How does the weekly menu update work?",
    answer:
      "Each week, PlanEat generates a fresh meal plan based on your preferences and previous choices.",
  },
  {
    question: "Does the app generate a shopping list?",
    answer:
      "Yes. Ingredients are grouped and de-duplicated into a smart grocery list for the entire week.",
  },
  {
    question: "Does it count calories and nutrients?",
    answer:
      "PlanEat estimates calories and key nutrients to help you stay aligned with your goals.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-14">
          Got Questions?
        </h2>

        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              onClick={() => toggle(index)}
              className="cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <span className="text-green-500 text-2xl font-bold">
                  {openIndex === index ? "−" : "+"}
                </span>
                <h3 className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </h3>
              </div>

              {openIndex === index && (
                <p className="mt-4 ml-10 text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
