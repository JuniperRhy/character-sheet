import { Switch, Route } from "react-router-dom"
import Character from "./Character"
import Campaign from "./Campaign"


function MainPage () {
    return (
<div className="App">
<h1>Login</h1>
<Switch>
<Route path="/campaign">
  <Campaign />
</Route>
<Route exact path="/character" >
  <Character />
</Route>
</Switch>
</div>
)
    }

export default MainPage