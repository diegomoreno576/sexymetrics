import React, { useReducer, createContext } from 'react';

import reducer from '../reducer';


let date = new Date();
const start = String(date.getFullYear() + String(date.getMonth() + 1).padStart(2, '0') + '01');
const end = String(date.getFullYear() + String(date.getMonth() + 1).padStart(2, '0') + String(date.getDate()).padStart(2, '0'));

const startPast = String(date.getFullYear() + String(date.getMonth()).padStart(2, '0') + '01');
const endPast = String(date.getFullYear() + String(date.getMonth()).padStart(2, '0') + String(date.getDate()).padStart(2, '0'));



const ThemeContext = createContext({});
const initialState = {
  isLoggedIn: false,
  currentuser:[],
  loginError: null,
  darkmode: true,
  FbDatos: [],
  Loading: true,
  blog_id: [],
  TimeStart: start,
  TimeEnd: end,
  TimeStartPast: startPast,
  TimeEndPast: endPast,
};

const ThemeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ThemeContext.Provider value={[state, dispatch]}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };
