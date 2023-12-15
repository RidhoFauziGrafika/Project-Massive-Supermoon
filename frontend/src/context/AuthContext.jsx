import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(() => {
    // Check if user data is available in localStorage
    const storedToken = localStorage.getItem("token") || "";
    const storedAccess = localStorage.getItem("access") || "[]";
    const storedUser = localStorage.getItem("user") || "";

    if (!storedAccess === null || !storedAccess.length === 0) {
      storedAccess = JSON.parse(storedAccess);
    }
    // If data found, parse roles into an array and return it as the initial state
    if (storedToken && storedAccess && storedUser) {
      return {
        user: storedUser,
        token: storedToken,
        roles: storedAccess,
      };
    }

    // If no data found, return an empty object
    return {};
  });

  // useEffect(() => {
  //   // Log the initial state
  //   // console.log("auth context:", auth);
  // }, []); // Run this effect only once when the component mounts

  useEffect(() => {
    // When auth changes, update localStorage
    if (auth.user) {
      localStorage.setItem("token", auth.token);
      localStorage.setItem("access", JSON.stringify(auth.roles)); // Stringify the roles array
      localStorage.setItem("user", auth.user);
    } else {
      // If user is logged out, clear localStorage
      localStorage.removeItem("token");
      localStorage.removeItem("access");
      localStorage.removeItem("user");
    }
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
