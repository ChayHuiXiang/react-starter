import React, { useState } from "react";

const AuthContext = React.createContext({
  authToken: '',
  isLoggedIn: false,
  apiKey: '', // Google API key
  onLogin: (token) => {},
  onLogout: () => {},
});

const calculateRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  const adjExpirationTime = new Date(expirationTime).getTime();

  const remainingDuration = adjExpirationTime - currentTime;
  return remainingDuration;
}

export const AuthContextProvider = (props) => {
  const [authToken, setAuthToken] = useState(localStorage.getItem("token"));
  const isLoggedIn = !!authToken;

  const loginHandler = (token) => {
    setAuthToken(token);
    localStorage.setItem("token",token);
  };

  const logoutHandler = () => {
    setAuthToken(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{
        authToken: authToken,
        isLoggedIn,
        apiKey: '', // Google API key
        onLogin: loginHandler,
        onLogout: logoutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
