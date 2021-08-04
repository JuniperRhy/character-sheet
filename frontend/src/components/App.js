import Header from "./Header";
import MainPage from "./MainPage";
import {useState, useEffect} from 'react';

function App() {
  const [playersData, playersDataSetter] = useState([])
  const [players, playersSetter] = useState([]);

  const [chars, setChars] = useState([])
  const [myCharacters, setMyCharacters] = useState([])

  useEffect(()=> {
    fetch("http://localhost:9393/characters")
    .then(r => r.json())
    .then(chars => {
      console.log(chars);
      setChars(chars)
    }
    )
  }, [])

  useEffect(() => {
    fetch("http://localhost:9393/players")
      .then((response) => response.json())
      .then(players => {
        console.log(players);
        playersDataSetter(players);
        playersSetter(players)
      })
  }, [])

  // function addToCharacters(chars) {
  //   if(!myCharacters.includes(players)) {
  //  const updateCharacters = [...myCharacters, players]
  // //  const updatePortfolioDeets = [...myCharacters]
  //  setMyCharacters(updateCharacters)
  // }}

  return (
    <div className="Application">
      <Header />
      <MainPage 
      chars = {chars}/>
    </div>
  );
}

export default App;
