import { Link } from "react-router-dom";

const Menu2 = () => {

    return (
        <nav>
            <div>
                <span>Delete chat</span>
            </div>
            <div>
                <span>Block user</span>
            </div>
            <div>
                <span>Add to favorites</span>
            </div>
            <div>
                <Link to="/user/88">See profile</Link>
            </div>
        </nav>
     );
}

export default Menu2;