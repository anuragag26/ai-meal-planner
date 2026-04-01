import heroImg from "../../assets/images/hero.png";

const Hero = () => {
  return (
    <section className="bg-linear-to-br from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Plan Your Meals with <span className="text-green-600">AI</span><br />
            Eat Healthy, Save Time
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Generate personalized weekly meal plans and grocery lists in seconds.
            100% free. No app required.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition">
              Create My Meal Plan
            </button>

            <button className="px-6 py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-100 transition">
              See How It Works
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="hidden md:block">
          <img
            src= {heroImg}
            alt="AI Meal Planner"
            className="w-full rounded-xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
