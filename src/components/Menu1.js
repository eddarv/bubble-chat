import { Link } from "react-router-dom";

const Menu1 = () => {

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/profile">See profile</Link>
                </li>
                <li>
                    <span>Empty chats</span>
                </li>
                <li>
                    <span>New broadcast</span>
                </li>
                <li>
                    <span>Friend List</span>
                </li>
            </ul>
        </nav>
     );
}

export default Menu1;