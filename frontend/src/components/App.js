import Header from "./Header";
import MainPage from "./MainPage";
import { useEffect } from "react";


function App() {
  useEffect(() => {
    fetch("http://localhost:9292").then((response) => console.log("hello!"));
  });

  return (
    <div className="App">
        <Header />
        <MainPage />
    </div>
  );
}

export default App;
