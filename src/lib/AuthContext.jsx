import React, { createContext, useState, useContext } from "react";

// Membuat Context untuk Authentication
const AuthContext = createContext();

// Provider untuk menyuplai state dan fungsi kepada komponen lain
export const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(true); // State untuk toggle login dan register

  return (
    <AuthContext.Provider value={{ isLogin, setIsLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook untuk mengakses state dan fungsi dari context
export const useAuth = () => {
  return useContext(AuthContext);
};
