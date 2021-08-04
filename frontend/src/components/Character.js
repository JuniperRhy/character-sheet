import { useParams } from "react-router-dom";
import CharacterCreator from "./CharacterCreator";
import { NavLink } from "react-router-dom";

function Character() {
  const paramsPort = useParams();

  console.log(paramsPort);

  return (
    <div>
      <NavLink to="/charactercreator">
        <h2>✦Create New Character✦ </h2>
      </NavLink>
      <h1>My Characters</h1>
      <h2>Test characters</h2>
    </div>
  );
}

export default Character;
