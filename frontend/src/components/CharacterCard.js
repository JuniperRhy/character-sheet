import { Link } from "react-router-dom"

function Card({chars, handleClick, key, name, race, character_class, alignment, strength, dexterity, constitution, intelligence, wisdom, charisma, personality, traits,flaws, equipment, campaign_id, player_id}) {
    

    
  return (
    
    <div className="card">
        <h1>
            {name}
        <br/>
            {race}
        </h1>
        <h2>
            {character_class}
        <br/>
            {alignment}
        </h2>
        <button id = "char-collection" onClick={() => handleClick(chars) }>Add to collection</button>
        
        {/* <Link to={`/${id}`}>More Details</Link> */} 

        
    </div>
    
    )
}

export default Card