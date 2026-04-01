import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
    setOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-green-600">
          AI Meal Planner
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-gray-700 hover:text-green-600">
            Home
          </Link>

          <Link to="/planner" className="text-gray-700 hover:text-green-600">
            Meal Planner
          </Link>

          {!user ? (
            <>
              <Link to="/login" className="text-gray-700 hover:text-green-600">
                Login
              </Link>
              <Link
                to="/register"
                className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
              >
                Get Started
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/dashboard"
                className="text-gray-700 hover:text-green-600"
              >
                Dashboard
              </Link>

              {user?.name && (
                <span className="text-gray-600 font-medium">
                  Hi, {user.name}
                </span>
              )}

              <button
                onClick={handleLogout}
                className="px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          )}
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-gray-700 text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col px-6 py-4 space-y-4">
            <Link onClick={() => setOpen(false)} to="/">Home</Link>
            <Link onClick={() => setOpen(false)} to="/planner">Meal Planner</Link>

            {!user ? (
              <>
                <Link onClick={() => setOpen(false)} to="/login">
                  Login
                </Link>
                <Link
                  onClick={() => setOpen(false)}
                  to="/register"
                  className="text-center px-4 py-2 bg-green-600 text-white rounded-lg"
                >
                  Get Started
                </Link>
              </>
            ) : (
              <>
                <Link
                  onClick={() => setOpen(false)}
                  to="/dashboard"
                >
                  Dashboard
                </Link>

                {user?.name && (
                  <span className="text-gray-600">
                    Hi, {user.name}
                  </span>
                )}

                <button
                  onClick={handleLogout}
                  className="text-center px-4 py-2 bg-red-500 text-white rounded-lg"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
