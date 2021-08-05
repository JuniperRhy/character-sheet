import { NavLink } from "react-router-dom";

function Campaign() {
  return (
    <div>
      <h2>Campaign Manager</h2>
      <NavLink to="/campaigncreator"> ✦Create a new campaign✦ </NavLink>
      <h3>Campaigns</h3>
    </div>
  );
}
export default Campaign;
