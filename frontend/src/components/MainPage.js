import { Switch, Route } from "react-router-dom"
import Character from "./Character"
import Campaign from "./Campaign"
import {useState, useEffect} from 'react';

function MainPage () {
  // const [playersData, playersDataSetter] = useState([])
  // const [players, playersSetter] = useState([]);

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

  // useEffect(() => {
  //   fetch("http://localhost:9393/players")
  //     .then((response) => response.json())
  //     .then(players => {
  //       console.log(players);
  //       playersDataSetter(players);
  //       playersSetter(players)
  //     })
  // }, [])

  function addToCharacters(chars) {
    if(!myCharacters.includes(chars)) {
   const updateCharacters = [...myCharacters, chars]
  //  const updatePortfolioDeets = [...myCharacters]
   setMyCharacters(updateCharacters)
  }}
return (
<div className="App">
    <Switch>
      <Route path="/campaign">
        <Campaign />
      </Route>
      <Route path="/character" component= {
            () => <Character  chars = {chars} myCharacters={myCharacters}/>
          }>
      </Route>
    </Switch>
</div>
)
    }

export default MainPage