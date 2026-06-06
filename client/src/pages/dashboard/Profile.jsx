import { useContext } from "react";

import { AuthContext } from "../../context/AuthContext";

function Profile() {

  const { userInfo } = useContext(AuthContext);

  return (
    <div>

      <h1 className="text-4xl font-bold text-blue-900 mb-6">
        Profile
      </h1>

      <div className="bg-white p-8 rounded-3xl shadow-lg">

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

    </div>
  );
}

export default Profile;