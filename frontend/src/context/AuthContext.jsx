import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(() => {
    // Check if user data is available in localStorage
    const storedToken = localStorage.getItem("token");
    const storedAccess = localStorage.getItem("access");
    const storedUser = localStorage.getItem("user");

    // If data found, parse roles into an array and return it as the initial state
    if (storedToken && storedAccess && storedUser) {
      return {
        user: storedUser,
        token: storedToken,
        roles: JSON.parse(storedAccess),
      };
    }

    // If no data found, return an empty object
    return {};
  });

  useEffect(() => {
    // Log the initial state
    // console.log("auth context:", auth);
  }, []); // Run this effect only once when the component mounts

  useEffect(() => {
    // When auth changes, update localStorage
    localStorage.setItem("token", auth.token);
    localStorage.setItem("access", JSON.stringify(auth.roles)); // Stringify the roles array
    localStorage.setItem("user", auth.user);
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
