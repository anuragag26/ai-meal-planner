import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-2">
        Dashboard
      </h1>
      <p className="text-gray-600 mb-10">
        Welcome back! Manage your meals and plans here.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Meal Planner */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-2">
            🍽️ Meal Planner
          </h2>
          <p className="text-gray-600 mb-4">
            Generate and customize your AI-powered meal plans.
          </p>
          <Link
            to="/planner"
            className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700"
          >
            Go to Planner
          </Link>
        </div>

        {/* Meal History */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-2">
            📜 Meal History
          </h2>
          <p className="text-gray-600 mb-4">
            View your previously generated meal plans.
          </p>
          <Link
            to="/history"
            className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700"
          >
            View History
          </Link>
        </div>

        {/* Profile (future-ready) */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-2">
            👤 Profile
          </h2>
          <p className="text-gray-600 mb-4">
            Manage your account and preferences.
          </p>
          <button
            disabled
            className="inline-block bg-gray-300 text-gray-600 px-4 py-2 rounded-lg font-medium cursor-not-allowed"
          >
            Coming Soon
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
