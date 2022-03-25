import { useState } from "react";
import { Link, Outlet } from "react-router-dom"

const NavBar = () => {

    return (
        <nav>
            <h3 className="movil">BubbleChat</h3>
            <Outlet className="movil"/>
            <ul>
                <li>
                    <Link to="friends">Friends</Link>
                </li>
                <li>
                    <Link to="groups">Groups</Link>
                </li>
                <li>
                    <button className="movil">+</button>
                </li>
                <li>
                    <Link to="world">World Chat</Link>
                </li>
                <li>
                    <Link to="favorites">Favorites</Link>
                </li>
            </ul>
            
        </nav>
     );
}

export default NavBar;