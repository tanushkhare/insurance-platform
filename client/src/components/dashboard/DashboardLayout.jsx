import { Outlet, useNavigate } from "react-router-dom";
import { useContext } from "react";

import DashboardSidebar from "./DashboardSidebar";

import { AuthContext } from "../../context/AuthContext";

function DashboardLayout() {

  const navigate = useNavigate();

  const { logout, userInfo } = useContext(AuthContext);

  const logoutHandler = () => {

    logout();

    navigate("/");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main */}
      <div className="flex-1 p-10">

        {/* Header */}
        <div className="flex justify-between items-center mb-10">

          <div>

            <h1 className="text-5xl font-bold text-blue-900">
              Dashboard
            </h1>

            <p className="text-gray-600 mt-2">
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

        {/* Nested Pages */}
        <div className="bg-red-500 text-white p-4 text-3xl">
  OUTLET TEST
</div>

      </div>

    </div>
  );
}

export default DashboardLayout;