import Header from "./Header";
import MainPage from "./MainPage";
import { useEffect } from "react";
import React from "react";
import "./App.css";
import Login from "./Login/Login";
import useToken from "./useToken";

function App() {
  useEffect(() => {
    fetch("http://localhost:9292").then((response) => console.log("hello!"));
  });
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="Application">
      <Header />
      <MainPage />
    </div>
  );
}

export default App;
