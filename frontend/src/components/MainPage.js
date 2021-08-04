import { Switch, Route } from "react-router-dom";
import Character from "./Character";
import Campaign from "./Campaign";
import CharacterCreator from "./CharacterCreator";
import CampaignCreator from "./CampaignCreator";
import { useState, useEffect } from "react";

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

export default MainPage;
