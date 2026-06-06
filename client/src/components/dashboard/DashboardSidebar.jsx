import { NavLink } from "react-router-dom";

function DashboardSidebar() {
  return (
    <div className="bg-blue-900 text-white w-72 min-h-screen p-6">

      {/* Logo */}
      <h2 className="text-3xl font-bold mb-10">
        InsurancePro
      </h2>

      {/* Navigation */}
      <div className="flex flex-col gap-4 text-lg">

        {/* Home */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            `p-3 rounded-xl transition ${
              isActive
                ? "bg-white text-blue-900 font-bold"
                : "hover:bg-blue-800"
            }`
          }
        >
          🏠 Home
        </NavLink>

        <hr className="border-blue-700 my-2" />

        {/* Dashboard */}
        <NavLink
          to="/dashboard"
          end
          className={({ isActive }) =>
            `p-3 rounded-xl transition ${
              isActive
                ? "bg-white text-blue-900 font-bold"
                : "hover:bg-blue-800"
            }`
          }
        >
          Dashboard
        </NavLink>

        {/* Policies */}
        <NavLink
          to="/dashboard/policies"
          className={({ isActive }) =>
            `p-3 rounded-xl transition ${
              isActive
                ? "bg-white text-blue-900 font-bold"
                : "hover:bg-blue-800"
            }`
          }
        >
          Policies
        </NavLink>

        {/* Claims */}
        <NavLink
          to="/dashboard/claims"
          className={({ isActive }) =>
            `p-3 rounded-xl transition ${
              isActive
                ? "bg-white text-blue-900 font-bold"
                : "hover:bg-blue-800"
            }`
          }
        >
          Claims
        </NavLink>

        {/* Investments */}
        <NavLink
          to="/dashboard/investments"
          className={({ isActive }) =>
            `p-3 rounded-xl transition ${
              isActive
                ? "bg-white text-blue-900 font-bold"
                : "hover:bg-blue-800"
            }`
          }
        >
          Investments
        </NavLink>

        {/* Profile */}
        <NavLink
          to="/dashboard/profile"
          className={({ isActive }) =>
            `p-3 rounded-xl transition ${
              isActive
                ? "bg-white text-blue-900 font-bold"
                : "hover:bg-blue-800"
            }`
          }
        >
          Profile
        </NavLink>

      </div>
    </div>
  );
}

export default DashboardSidebar;