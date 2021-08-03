import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="Header">
      <h1>Character Creator</h1>
      <div className="">
        <nav>
          <NavLink exact to="/">
            ✦Home✦
          </NavLink>
          <NavLink to="/character"> ✦Characters✦ </NavLink>
          <NavLink to="/campaign"> ✦Campaign✦ </NavLink>
        </nav>
      </div>
    </div>
  );
}

export default Header;
