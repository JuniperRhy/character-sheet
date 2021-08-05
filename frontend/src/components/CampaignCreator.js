import { useParams } from "react-router-dom";

function CampaignCreator() {
  const paramsPort = useParams();

  console.log(paramsPort, "Test");

  return (
    <div>
      <h1>Campaign Creator</h1>
      <form>
        <label>
          Campaign name:
          <input className="inputfield" type="text" />
        </label>
        <input className="submitbtn" type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default CampaignCreator;
