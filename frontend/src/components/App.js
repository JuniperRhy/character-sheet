import Header from "./Header";
import MainPage from "./MainPage";

import React from "react";
import "./App.css";
import Login from "./Login/Login";
import useToken from "./useToken";

function App() {

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