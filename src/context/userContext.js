import React, { useState } from 'react';

const ContextUser = React.createContext({});


export function UserContextProvider ({ children }) {
  const [jwt, setJWT] = useState(() => window.sessionStorage.getItem('jwt'));

  return (
    <ContextUser.Provider value={{jwt, setJWT}}>
      {children}
    </ContextUser.Provider>
  );
};

export default ContextUser;
