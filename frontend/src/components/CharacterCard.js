import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import CharacterClassImage from "./CharacterClassImage";

function Card({
  chars,
  handleClick,
  key,
  name,
  race,
  character_class,
  alignment,
  strength,
  dexterity,
  constitution,
  intelligence,
  wisdom,
  charisma,
  personality,
  traits,
  flaws,
  equipment,
  campaign_id,
  player_id,
}) {
  const paramsPort = useParams();
  return (
    <div className="charcard">
      <h1>
        <div className="cardtitle">name:</div>
        {name}
        <br />
        <div className="cardtitle">race:</div>
        {race}
      </h1>
      <h3>
        <div className="cardtitle2">class:</div> {character_class}
        <CharacterClassImage character_class={character_class} />
        <div className="cardtitle2">alignment:</div>
        {alignment}
      </h3>
      <button
        id="char-collection"
        className="char-collection"
        onClick={() => handleClick(chars)}
      >
        Add to collection
      </button>

      {/* <Link to={`/${id}`}>More Details</Link> */}
    </div>
  );
}

export default Card;
