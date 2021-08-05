import { Switch, Route } from "react-router-dom";
import Character from "./Character";
import Campaign from "./Campaign";
import CharacterCreator from "./CharacterCreator";
import CampaignCreator from "./CampaignCreator";
import { useState, useEffect } from "react";

<<<<<<< HEAD
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
=======
function MainPage() {
  const [playersData, playersDataSetter] = useState([]);
  const [players, playersSetter] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9393/players")
      .then((response) => response.json())
      .then((players) => {
        console.log(players);
        playersDataSetter(players);
        playersSetter(players);
      });
  }, []);

  return (
    <div className="App">
      {/* <h1>Login</h1> */}
      <Switch>
        <Route path="/campaign">
          <Campaign />
        </Route>
        <Route exact path="/character">
          <Character />
        </Route>
        <Route exact path="/charactercreator">
          <CharacterCreator />
        </Route>
        <Route exact path="/campaigncreator">
          <CampaignCreator />
        </Route>
      </Switch>
    </div>
  );
}
>>>>>>> a0744b2de3288e0bf23e1a9b17cdbfaa6f40555b

export default MainPage;
