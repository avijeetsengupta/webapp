import React, { useEffect, useState } from "react";
import firebase from "firebase/app";
import "./App.css";
import Routes from "./Routes";
import Auth from "./Auth";

function App() {
  const [user, setUser] = useState<firebase.User | null>(null);
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);
  return <div className="App">{user ? <Routes /> : <Auth />}</div>;
}

export default App;
