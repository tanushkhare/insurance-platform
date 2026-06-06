import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import DashboardSidebar from "../components/dashboard/DashboardSidebar";

import { AuthContext } from "../context/AuthContext";

function Dashboard() {

  const navigate = useNavigate();

  const { userInfo, logout } = useContext(AuthContext);

  const logoutHandler = () => {

    logout();

    navigate("/");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main Content */}
      <div className="flex-1 p-10">

        {/* Top Section */}
        <div className="flex justify-between items-center mb-10">

          <div>

            <h1 className="text-5xl font-bold text-blue-900">
              Dashboard
            </h1>

            <p className="text-gray-600 mt-2 text-lg">
              Welcome back, {userInfo?.name}
            </p>

          </div>

          <button
            onClick={logoutHandler}
            className="bg-red-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-600 transition"
          >
            Logout
          </button>

        </div>

        {/* User Info */}
        <div className="bg-white p-8 rounded-3xl shadow-lg mb-10">

          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Account Information
          </h2>

          <div className="space-y-4 text-lg">

            <p>
              <span className="font-semibold">
                Name:
              </span>{" "}
              {userInfo?.name}
            </p>

            <p>
              <span className="font-semibold">
                Email:
              </span>{" "}
              {userInfo?.email}
            </p>

          </div>

        </div>

        {/* Dashboard Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-blue-900 text-white p-8 rounded-3xl shadow-lg">

            <h2 className="text-2xl font-semibold">
              Policies
            </h2>

            <p className="text-5xl font-bold mt-6">
              4
            </p>

          </div>

          <div className="bg-green-600 text-white p-8 rounded-3xl shadow-lg">

            <h2 className="text-2xl font-semibold">
              Claims
            </h2>

            <p className="text-5xl font-bold mt-6">
              2
            </p>

          </div>

          <div className="bg-yellow-400 text-black p-8 rounded-3xl shadow-lg">

            <h2 className="text-2xl font-semibold">
              Investments
            </h2>

            <p className="text-5xl font-bold mt-6">
              ₹5L
            </p>

          </div>

          <div className="bg-purple-600 text-white p-8 rounded-3xl shadow-lg">

            <h2 className="text-2xl font-semibold">
              Notifications
            </h2>

            <p className="text-5xl font-bold mt-6">
              3
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;