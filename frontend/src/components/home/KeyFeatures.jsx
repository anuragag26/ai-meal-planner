import sampleImg from "../../assets/images/side-img.png"

const KeyFeatures = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">
            Key Features
          </h2>
          <p className="text-gray-500 mt-3">
            Personalized menus, smarter shopping, and less friction every week
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* LEFT: Text Content */}
          <div className="flex-1 space-y-8 border-l-4 border-green-500 pl-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Personalized weekly plans
              </h3>
              <p className="text-gray-600 mt-1">
                Calorie range auto-set from your profile; fits your diet choices
                and schedule.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Clear recipes & nutrition
              </h3>
              <p className="text-gray-600 mt-1">
                Step lists, prep time, macros at a glance, and easy swaps.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Smart grocery list
              </h3>
              <p className="text-gray-600 mt-1">
                Items are grouped and de-duplicated so you shop once.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Meal-prep friendly
              </h3>
              <p className="text-gray-600 mt-1">
                Batch on weekends, reuse meals on busy days.
              </p>
            </div>
          </div>

          {/* RIGHT: Image */}
          <div className="flex-1 flex justify-center">
            <img
              src={sampleImg}
              alt="Meal planning preview"
              className="w-105 h-105 rounded-xl shadow-lg"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
