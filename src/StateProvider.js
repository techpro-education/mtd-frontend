import React, { createContext, useContext, useReducer } from "react";

//Data Layer
export const StateContext = createContext();

//State Provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//Expose the Context
export const useStateValue = () => useContext(StateContext);
