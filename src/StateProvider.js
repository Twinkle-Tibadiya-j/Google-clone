import React, { createContext, useContext, useReducer } from "react";
import reducer, { initialState } from "./reducer"; // Corrected spelling

// Create Context
export const StateContext = createContext();

// StateProvider Component
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Custom Hook to Use State
export const useStateValue = () => useContext(StateContext);
