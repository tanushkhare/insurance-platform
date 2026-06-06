
import { createContext, useEffect, useState } from "react";


// ==========================================
// CREATE CONTEXT
// ==========================================

export const AuthContext = createContext();


// ==========================================
// AUTH PROVIDER
// ==========================================

function AuthProvider({ children }) {

  // ==========================================
  // STATE
  // ==========================================

  const [userInfo, setUserInfo] = useState(null);


  // ==========================================
  // LOAD USER FROM LOCAL STORAGE
  // ==========================================

  useEffect(() => {

    const storedUser = localStorage.getItem("userInfo");

    if (storedUser) {

      setUserInfo(JSON.parse(storedUser));

    }

  }, []);


  // ==========================================
  // LOGIN FUNCTION
  // ==========================================

  const login = (userData) => {

    // SAVE USER TO LOCAL STORAGE

    localStorage.setItem(
      "userInfo",
      JSON.stringify(userData)
    );

    // UPDATE STATE

    setUserInfo(userData);

  };


  // ==========================================
  // LOGOUT FUNCTION
  // ==========================================

  const logout = () => {

    // REMOVE USER

    localStorage.removeItem("userInfo");

    // CLEAR STATE

    setUserInfo(null);

  };


  // ==========================================
  // PROVIDER
  // ==========================================

  return (

    <AuthContext.Provider
      value={{
        userInfo,
        setUserInfo,
        login,
        logout,
      }}
    >

      {children}

    </AuthContext.Provider>

  );

}

export default AuthProvider;
