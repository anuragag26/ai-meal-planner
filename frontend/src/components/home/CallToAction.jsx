const CallToAction = () => {
  return (
    <section className="py-20 bg-green-600 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Start Planning Your Meals Today
        </h2>

        <p className="mt-4 text-lg opacity-90">
          Join thousands of users planning smarter meals with AI.
        </p>

        <button className="mt-8 px-8 py-4 bg-white text-green-600 rounded-lg font-semibold hover:bg-gray-100 transition">
          Get Started for Free
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
