import React, { useReducer, createContext } from 'react';
import reducer from '../reducer';


const LayoutContext = createContext({});
const initialState = {
  changeLayout: true,
};

const LayoutContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <LayoutContext.Provider value={[state, dispatch]}>
      {children}
    </LayoutContext.Provider>
  );
};

export { LayoutContext, LayoutContextProvider };
