import { useState } from "react";
import { Link, Outlet } from "react-router-dom"

const NavBar = () => {

    return (
        <nav>
            <h3 className="movil">BubbleChat</h3>
            <Outlet className="movil"/>
            <Link to="friends">Friends</Link>
            <Link to="groups">Groups</Link>
            <button className="movil">+</button>
            <Link to="world">World</Link>
            <Link to="favorites">Favorites</Link>
        </nav>
     );
}

export default NavBar;