import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Dashboard() {
  const { userInfo } = useContext(AuthContext);

  return (
    <>
      {/* User Info */}
      <div className="bg-white p-8 rounded-3xl shadow-lg mb-10">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">
          Account Information
        </h2>

        <div className="space-y-4 text-lg">
          <p>
            <span className="font-semibold">Name:</span>{" "}
            {userInfo?.name}
          </p>

          <p>
            <span className="font-semibold">Email:</span>{" "}
            {userInfo?.email}
          </p>
        </div>
      </div>

      {/* Dashboard Stats */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-blue-900 text-white p-8 rounded-3xl shadow-lg">
          <h2 className="text-2xl font-semibold">Policies</h2>
          <p className="text-5xl font-bold mt-6">4</p>
        </div>

        <div className="bg-green-600 text-white p-8 rounded-3xl shadow-lg">
          <h2 className="text-2xl font-semibold">Claims</h2>
          <p className="text-5xl font-bold mt-6">2</p>
        </div>

        <div className="bg-yellow-400 text-black p-8 rounded-3xl shadow-lg">
          <h2 className="text-2xl font-semibold">Investments</h2>
          <p className="text-5xl font-bold mt-6">₹5L</p>
        </div>

        <div className="bg-purple-600 text-white p-8 rounded-3xl shadow-lg">
          <h2 className="text-2xl font-semibold">Notifications</h2>
          <p className="text-5xl font-bold mt-6">3</p>
        </div>
      </div>
    </>
  );
}

export default Dashboard;