import { Navigate } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "../../context/AuthContext";

function PrivateRoute({ children }) {

  const { userInfo } = useContext(AuthContext);

  return userInfo ? children : <Navigate to="/login" />;
}

export default PrivateRoute;