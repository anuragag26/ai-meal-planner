const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">
        
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold text-white">
            AI Meal Planner
          </h3>
          <p className="mt-4 text-gray-400">
            Plan healthy meals effortlessly using AI.
            Personalized, fast, and completely free.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Product
          </h4>
          <ul className="space-y-2">
            <li>Meal Planner</li>
            <li>How It Works</li>
            <li>Features</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Company
          </h4>
          <ul className="space-y-2">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} AI Meal Planner. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
