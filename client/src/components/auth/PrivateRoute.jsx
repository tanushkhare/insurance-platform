import { Navigate } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "../../context/AuthContext";

function PrivateRoute({ children }) {
  return children;
}

export default PrivateRoute;