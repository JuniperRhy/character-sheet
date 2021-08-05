import { useParams } from "react-router-dom";
  import React, { useState } from 'react';
  import { useHistory } from 'react-router-dom';
  import CharacterCard from './CharacterCard';

function CharacterCreator({chars, myCharacters}) {
  const paramsPort = useParams();
  console.log(paramsPort, "Test");
  const history = useHistory();
  const [characterName, setCharacterName] = useState('');
  const [race, setRace] = useState('');
  const [characterClass, setCharacterClass] = useState('');
  const [alignment, setAlignment] = useState('');
  const [strength, setStrength] = useState(0);
  const [dexterity, setDexterity] = useState(0);
  const [constitution, setConstitution] = useState(0);
  const [intelligence, setIntelligence] = useState(0);
  const [wisdom, setWisdom] = useState(0);
  const [charisma, setCharisma] = useState(0);
  const [personality, setPersonality] = useState('');
  const [traits, setTraits] = useState('');
  const [flaws, setFlaws] = useState('');
  const [equipment, setEquipment] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:9393/new_character", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        id: 1
        // characterName,
        // race,
        // characterClass,
        // alignment,
        // strength,
        // dexterity,
        // constitution,
        // intelligence,
        // wisdom,
        // charisma,
        // personality,
        // traits,
        // flaws,
        // equipment
      })
    });

    // const parsedBody = await res.json();
    // myCharacters([...chars, parsedBody]);
    // history.push('/new_character');
  };



console.log(chars);
  return (
    <div className="charactercreator">
      <h2>Character Creator</h2>
      <form onSubmit={handleSubmit}>
        <label>
          ✦ Character name:
          <input 
          className="inputfield" 
          type="text" 
          name="characterName" 
          id="characterName" 
          value ={characterName} 
          onChange={(e) => setCharacterName(e.target.value)} />
        </label>
        <br></br>
        <label>
          ✦ Race:
          <input 
          className="inputfield" 
          type="text" 
          name="race" 
          id="race" 
          value ={race} 
          onChange={(e) => setRace(e.target.value)} />
        </label>
        <br></br>
        <label>
          ✦ Class:
          <input 
          className="inputfield" 
          type="text" 
          name="class" 
          id="class" 
          value ={characterClass} 
          onChange={(e) => setCharacterClass(e.target.value)} />
        </label>
        <br></br>
        <label>
          ✦ Alignment:
          <input 
          className="inputfield" 
          type="text" 
          name="alignment" 
          id="alignment" 
          value ={alignment} 
          onChange={(e) => setAlignment(e.target.value)} />
        </label>
        <br></br>
        <label>
          ✦ Strength:
          <input 
          className="inputfield" 
          type="integer" 
          name="strength" 
          id="strength" 
          value ={strength} 
          onChange={(e) => setStrength(e.target.value)} />
        </label>
        <br></br>
        <label>
          ✦ Dexterity:
          <input 
          className="inputfield" 
          type="integer" 
          name="dexterity" 
          id="dexterity" 
          value ={dexterity} 
          onChange={(e) => setDexterity(e.target.value)} />
        </label>
        <br></br>
        <label>
          ✦ Constitution:
          <input 
          className="inputfield" 
          type="integer" 
          name="constitution" 
          id="constitution" 
          value ={constitution} 
          onChange={(e) => setConstitution(e.target.value)} />
        </label>
        <br></br>
        <label>
          ✦ Intelligence:
          <input 
          className="inputfield" 
          type="integer" 
          name="intelligence" 
          id="intelligence" 
          value ={intelligence} 
          onChange={(e) => setIntelligence(e.target.value)} />
        </label>
        <br></br>
        <label>
          ✦ Wisdom:
          <input 
          className="inputfield" 
          type="integer" 
          name="wisdom" 
          id="wisdom" 
          value ={wisdom} 
          onChange={(e) => setWisdom(e.target.value)} />
        </label>
        <br></br>
        <label>
          ✦ Charisma:
          <input 
          className="inputfield" 
          type="integer" 
          name="charisma" 
          id="charisma" 
          value ={charisma} 
          onChange={(e) => setCharisma(e.target.value)} />
        </label>
        <br></br>
        <label>
          ✦ Personality:
          <input 
          className="inputfield" 
          type="text" 
          name="personality" 
          id="personality" 
          value ={personality} 
          onChange={(e) => setPersonality(e.target.value)} />
        </label>
        <br></br>
        <label>
          ✦ Traits:
          <input 
          className="inputfield" 
          type="text" 
          name="traits" 
          id="traits" 
          value ={traits} 
          onChange={(e) => setTraits(e.target.value)} />
        </label>
        <br></br>
        <label>
          ✦ Flaws:
          <input 
          className="inputfield" 
          type="text" 
          name="flaws" 
          id="flaws" 
          value ={flaws} 
          onChange={(e) => setFlaws(e.target.value)} />
        </label>
        <br></br>
        <label>
          ✦ Equipment:
          <input 
          className="inputfield" 
          type="text" 
          name="equipment" 
          id="equipment" 
          value ={equipment} 
          onChange={(e) => setEquipment(e.target.value)} />
        </label>
        <br></br>
        <button className="submitbtn" type="submit"> Add Your Champion </button>
      </form>
    </div>
  );
}

export default CharacterCreator;
