import React, { useEffect, useState } from "react";
import AppRouter from "./Router";
import { authService } from "../fbase";
// import { getAuth } from '@firebase/auth';

function App() {
  // const auth = getAuth();
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserObj(user);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  return (
    <>
      {init ? (
        <AppRouter isLoggedIn={isLoggedIn} userObj={userObj} />
      ) : (
        "Initializing ..."
      )}
      <a href="/">
        <footer> &copy;{new Date().getFullYear()} Kwitter </footer>
      </a>
    </>
  );
}

export default App;
