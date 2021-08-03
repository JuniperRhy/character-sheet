import React from "react";
import { NavLink } from "react-router-dom"

function Header() {
    return (
    <div className="header">
        <h1>Character Creator</h1>
        <nav>
        <NavLink exact to="/">Home</NavLink>
        <NavLink to="/character">Characters</NavLink>
        <NavLink to="/campaign">Campaign</NavLink>
        </nav>
    </div>
    )
}

export default Header