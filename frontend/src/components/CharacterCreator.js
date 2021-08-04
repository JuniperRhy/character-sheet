import { useParams } from "react-router-dom";

function CharacterCreator() {
  const paramsPort = useParams();

  console.log(paramsPort, "Hello");

  return (
    <div>
      <h1>Character creator</h1>
    </div>
  );
}

export default CharacterCreator;
