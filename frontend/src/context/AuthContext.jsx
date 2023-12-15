import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(() => {
    // Check if user data is available in localStorage
    const storedToken = localStorage.getItem("token");
    const storedAccess = localStorage.getItem("access");
    const storedUser = localStorage.getItem("user");

    if (storedToken && storedAccess && storedUser) {
      // If data found, return it as the initial state
      return { user: storedUser, token: storedToken, roles: storedAccess };
    }

    // If no data found, return an empty object
    return {};
  });

  useEffect(() => {
    // When auth changes, update localStorage
    localStorage.setItem("token", auth.token);
    localStorage.setItem("access", auth.roles);
    localStorage.setItem("user", auth.user);
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
