import { useParams } from "react-router-dom";

const getImage = (src) => (
  <div>
    <img
      className="CharCardImage"
      src={src}
      alt="Class"
      height="100px"
      width="100px"
    />
  </div>
);

function CharacterClassImage({ character_class }) {
  let class_image;
  switch (character_class) {
    case "Theif":
      return getImage(
        "https://www.enworld.org/attachments/arcane-trickster-png.80070/"
      );
    case "Artificer":
      return getImage(
        "https://www.enworld.org/attachments/artficer-png.80071/"
      );
    case "Barbarian":
      return getImage(
        "https://www.enworld.org/attachments/barbarian-png.80072/"
      );
    case "Bard":
      return getImage("https://www.enworld.org/attachments/bard-png.80073/");
    case "Cleric":
      return getImage("https://www.enworld.org/attachments/cleric-png.80074/");
    case "Ranger":
      return getImage("https://www.enworld.org/attachments/fighter-png.80077/");
    case "Monk":
      return getImage("https://www.enworld.org/attachments/monk-png.80078/");
    case "Druid":
      return getImage("https://www.enworld.org/attachments/mystic-png.82590/");
    case "Paladin":
      return getImage("https://www.enworld.org/attachments/paladin-png.80079/");
    case "Sorcerer":
      return getImage(
        "https://www.enworld.org/attachments/sorcerer-png.80082/"
      );
    case "Mage":
      return getImage("https://www.enworld.org/attachments/warlock-png.80083/");
    case "Wizard":
      return getImage("https://www.enworld.org/attachments/wizard-png.80084/");

    default:
      return getImage(
        "http://clipart-library.com/image_gallery2/Dragon-Tattoos-PNG-Image.png"
      );
  }

  return <div>{class_image}</div>;
}

export default CharacterClassImage;
