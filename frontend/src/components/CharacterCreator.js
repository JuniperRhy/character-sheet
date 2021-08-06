import { useParams } from "react-router-dom";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import CharacterCard from "./CharacterCard";

function CharacterCreator({ chars, myCharacters, props }) {
  const paramsPort = useParams();
  console.log(paramsPort, "Test");
  const history = useHistory();
  const [characterName, setCharacterName] = useState("");
  const [race, setRace] = useState("");
  const [characterClass, setCharacterClass] = useState("");
  const [alignment, setAlignment] = useState("");
  const [strength, setStrength] = useState(0);
  const [dexterity, setDexterity] = useState(0);
  const [constitution, setConstitution] = useState(0);
  const [intelligence, setIntelligence] = useState(0);
  const [wisdom, setWisdom] = useState(0);
  const [charisma, setCharisma] = useState(0);
  const [personality, setPersonality] = useState("");
  const [traits, setTraits] = useState("");
  const [flaws, setFlaws] = useState("");
  const [equipment, setEquipment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("buttons", e.target.characterClass.value);
    fetch(`http://localhost:9393/new_character`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        character_name: e.target.characterName.value,
        race: e.target.race.value,
        character_class: e.target.characterClass.value,
        alignment: e.target.alignment.value,
        strength: e.target.strength.value,
        dexterity: e.target.dexterity.value,
        constitution: e.target.constitution.value,
        intelligence: e.target.intelligence.value,
        wisdom: e.target.wisdom.value,
        charisma: e.target.charisma.value,
        personality: e.target.personality.value,
        traits: e.target.traits.value,
        flaws: e.target.flaws.value,
        equipment: e.target.equipment.value,
      }),
    });
  };

  // const res = await fetch(
  //   `http://localhost:9393/new_character`,
  //   {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       // Accept: "application/json",
  //     },
  //     body: JSON.stringify({
  //       // id: 1
  //       character_name: characterName,
  //       race: race,
  //       character_class: characterClass,
  //       alignment: alignment,
  //       strength: strength,
  //       dexterity: dexterity,
  //       constitution: constitution,
  //       intelligence: intelligence,
  //       wisdom: wisdom,
  //       charisma: charisma,
  //       personality: personality,
  //       traits: traits,
  //       flaws: flaws,
  //       equipment: equipment,
  //     }),
  //   }.then(() => props.myCharacters())
  // );

  // const parsedBody = await res.json();
  // myCharacters([...chars, parsedBody]);
  // history.push('/new_character');
  // };

  console.log(chars);
  return (
    <div className="charactercreator">
      <h2>Character Creator</h2>
      <form onSubmit={handleSubmit}>
        <label>
          ✦ Character name:
          <input name="characterName" className="inputfield" type="text" />
        </label>
        <br></br>
        <label>
          ✦ Race:
          <input name="race" className="inputfield" type="text" />
        </label>
        <br></br>
        <label>
          ✦ Class:
          <input name="characterClass" className="inputfield" type="text" />
        </label>
        <br></br>
        <label>
          ✦ Alignment:
          <input name="alignment" className="inputfield" type="text" />
        </label>
        <br></br>
        <label>
          ✦ Strength:
          <input name="strength" className="inputfield" type="text" />
        </label>
        <br></br>
        <label>
          ✦ Dexterity:
          <input name="dexterity" className="inputfield" type="text" />
        </label>
        <br></br>
        <label>
          ✦ Constitution:
          <input name="constitution" className="inputfield" type="text" />
        </label>
        <br></br>
        <label>
          ✦ Intelligence:
          <input name="intelligence" className="inputfield" type="text" />
        </label>
        <br></br>
        <label>
          ✦ Wisdom:
          <input name="wisdom" className="inputfield" type="text" />
        </label>
        <br></br>
        <label>
          ✦ Charisma:
          <input name="charisma" className="inputfield" type="text" />
        </label>
        <br></br>
        <label>
          ✦ Personality:
          <input name="personality" className="inputfield" type="text" />
        </label>
        <br></br>
        <label>
          ✦ Traits:
          <input name="traits" className="inputfield" type="text" />
        </label>
        <br></br>
        <label>
          ✦ Flaws:
          <input name="flaws" className="inputfield" type="text" />
        </label>
        <br></br>
        <label>
          ✦ Equipment:
          <input name="equipment" className="inputfield" type="text" />
        </label>
        <br></br>
        <button className="submitbtn" type="submit">
          {" "}
          Add Your Champion{" "}
        </button>
      </form>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default CharacterCreator;
