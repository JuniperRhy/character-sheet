import { useParams } from "react-router-dom";

function CharacterCreator() {
  const paramsPort = useParams();

  console.log(paramsPort, "Test");

  return (
<<<<<<< HEAD
    <div>
      <h1>Character creator</h1>
      <form>
        
        </form>
=======
    <div className="charactercreator">
      <h2>Character Creator</h2>
      <form>
        <label>
          ✦ Character name:
          <input className="inputfield" type="text" />
        </label>
        <br></br>
        <label>
          ✦ Race:
          <input className="inputfield" type="text" />
        </label>
        <br></br>
        <label>
          ✦ Class:
          <input className="inputfield" type="text" />
        </label>
        <br></br>
        <label>
          ✦ Alignment:
          <input className="inputfield" type="text" />
        </label>
        <br></br>
        <label>
          ✦ Strength:
          <input className="inputfield" type="text" />
        </label>
        <br></br>
        <label>
          ✦ Dexterity:
          <input className="inputfield" type="text" />
        </label>
        <br></br>
        <label>
          ✦ Constitution:
          <input className="inputfield" type="text" />
        </label>
        <br></br>
        <label>
          ✦ Intelligence:
          <input className="inputfield" type="text" />
        </label>
        <br></br>
        <label>
          ✦ Wisdom:
          <input className="inputfield" type="text" />
        </label>
        <br></br>
        <label>
          ✦ Charisma:
          <input className="inputfield" type="text" />
        </label>
        <br></br>
        <label>
          ✦ Personality:
          <input className="inputfield" type="text" />
        </label>
        <br></br>
        <label>
          ✦ Traits:
          <input className="inputfield" type="text" />
        </label>
        <br></br>
        <label>
          ✦ Flaws:
          <input className="inputfield" type="text" />
        </label>
        <br></br>
        <label>
          ✦ Equipment:
          <input className="inputfield" type="text" />
        </label>
        <br></br>
        <input className="submitbtn" type="submit" value="Submit" />
      </form>
>>>>>>> a0744b2de3288e0bf23e1a9b17cdbfaa6f40555b
    </div>
  );
}

export default CharacterCreator;
