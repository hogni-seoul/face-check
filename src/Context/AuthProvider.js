import React, { useContext, useReducer } from "react";

// AuthContext
import AuthContext from "./AuthContext";

export const AuthProvider = ({ reducer, initialState, children }) => {
  return (
    <AuthContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </AuthContext.Provider>
  );
};

export const useStateValue = () => useContext(AuthContext);
