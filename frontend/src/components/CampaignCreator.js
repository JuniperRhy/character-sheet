import { useParams, useState } from "react-router-dom";

function CampaignCreator() {
  const paramsPort = useParams();
  // const [campaignName, setCampaignName ] = useState("")

  console.log(paramsPort, "Test");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("buttons", e.target.campaignName.value);
    fetch(`http://localhost:9393/new_campaign`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: e.target.campaignName.value,
      }),
    });
  };

  return (
    <div>
      <h1>Campaign Creator</h1>
      <form onSubmit={handleSubmit}>
        Campaign name:
        <input name="campaignName" className="inputfield" type="text" />
        <input className="submitbtn" type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default CampaignCreator;
