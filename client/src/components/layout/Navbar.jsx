import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "../../context/AuthContext";

function Navbar() {

  const navigate = useNavigate();

  const { userInfo, logout } = useContext(AuthContext);

  const logoutHandler = () => {

    logout();

    navigate("/");
  };

  return (
    <nav className="bg-blue-900 text-white shadow-lg">

      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        {/* Logo */}
        <Link
          to="/"
          className="text-4xl font-bold"
        >
          InsurancePro
        </Link>

        {/* Menu */}
        <div className="flex items-center gap-8 text-lg font-medium">

          <Link to="/" className="hover:text-yellow-300">
            Home
          </Link>

          <Link to="/about" className="hover:text-yellow-300">
            About
          </Link>

          <Link to="/contact" className="hover:text-yellow-300">
            Contact
          </Link>

          {/* Logged In */}
          {userInfo ? (
            <>

              <Link
                to="/dashboard"
                className="hover:text-yellow-300"
              >
                Dashboard
              </Link>

              <button
                onClick={logoutHandler}
                className="bg-red-500 px-5 py-2 rounded-xl hover:bg-red-600 transition"
              >
                Logout
              </button>

            </>
          ) : (
            <>
              {/* Logged Out */}

              <Link
                to="/login"
                className="hover:text-yellow-300"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="bg-yellow-400 text-black px-5 py-2 rounded-xl hover:bg-yellow-300 transition"
              >
                Register
              </Link>

            </>
          )}

        </div>

      </div>

    </nav>
  );
}

export default Navbar;