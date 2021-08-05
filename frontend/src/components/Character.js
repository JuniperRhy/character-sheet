import { useParams } from "react-router-dom";
import CharacterCreator from "./CharacterCreator";
import { NavLink } from "react-router-dom";
import CharacterCard from "./CharacterCard";

function Character({handleClick, chars, myCharacters}) {
  const paramsPort = useParams();

  console.log(chars)

  return (
    <div>
      <NavLink to="/charactercreator">
        <h2>✦Create New Character✦ </h2>
      </NavLink>
      <div className="characters">
      <h1>Characters</h1>
      
        {chars.map(eachChar => {
          return (
            <CharacterCard 
            key = {eachChar.id}
            name = {eachChar.character_name}
            race = {eachChar.race}
            character_class = {eachChar.character_class}
            alignment = {eachChar.alignment}
            strength = {eachChar.strength}
            dexterity = {eachChar.dexterity}
            constitution = {eachChar.constitution}
            intelligence = {eachChar.intelligence}
            wisdom = {eachChar.wisdom}
            charisma = {eachChar.charisma}
            personality = {eachChar.personality}
            traits = {eachChar.traits}
            flaws = {eachChar.flaws}
            equipment = {eachChar.equipment}
            campaign_id = {eachChar.campaign_id}
            player_id = {eachChar.player_id}
            handleClick = {handleClick}
            />
          )
        })
      }     
        </div>
        <h1>Add to Character Collection</h1>
    </div>
  );
}

export default Character;
