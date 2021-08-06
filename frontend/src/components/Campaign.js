import { NavLink } from "react-router-dom";

function Campaign({ campaigns, myCampaign }) {
  return (
    <div>
      <h2>Campaign Manager</h2>
      <NavLink to="/campaigncreator"> ✦Create a new campaign✦ </NavLink>
      <h3>Campaigns</h3>
      {campaigns.map((campaign) => {
        return <div>{campaign.name}</div>;
      })}
    </div>
  );
}
export default Campaign;
