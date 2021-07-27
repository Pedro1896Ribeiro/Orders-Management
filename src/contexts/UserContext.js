import React, { useState, createContext } from 'react';

const UserContext = createContext([{}, () => {}]);

const UserProvider = (props) => {
  const [state, setState] = useState({
    username: '',
    phone: '',
    email: '',
    uid: '',
    isLoggedIn: null,
    avatar: '',
  });

  return (
    <UserContext.Provider value={[state, setState]}>
      {props.children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
