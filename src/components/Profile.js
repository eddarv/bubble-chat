import {useState} from "react"
import { useNavigate, useLocation } from "react-router-dom";

let initialStatus=""

const Profile = () => {
    const location = useLocation()
    const navigate = useNavigate();
    const [status, setStatus] = useState(initialStatus);

    const handleChange = (e) =>{
        setStatus(e.target.value)
    }

    const sendStatus = (e) =>{
        console.log('status enviado')
    }


    return (
        <>
            <nav>
                <button onClick={() => navigate(`/home`)}>
                    <img src="../back-button.svg"/>
                </button>
                <span>Profile</span>
            </nav>
            <div>
                <img src="../favicon.ico"/>
            </div>
            <section>
                <ol>
                    <li>
                        <span>Nickname: </span>
                        <span>Gecko</span>
                    </li>
                    <li>
                        <span>Name: </span>
                        <span>Edward</span>
                    </li>
                    <li>
                        <span>Status: </span>
                        {
                            location.pathname==="/profile"
                            ?
                            <input type="text" name="status" onChange={handleChange} value={status} onBlur={sendStatus}/>
                            :
                            <span>Soy un estado</span>
                        }
                    </li>
                    <li>
                        <span>Country: </span>
                        <span>Venezuela</span>
                    </li>
                    <li>
                        <span>Birthday: </span>
                        <span>23-05-1998</span>
                    </li>
                </ol>
                {
                    location.pathname==="/profile"
                    ?
                    <div>
                        <button>Friends</button>
                        <button>Logout</button>
                        <button>Delete Account</button>
                    </div>
                    :
                    <div>
                        <button>Add friend</button>
                        <button>Block user</button>
                    </div>
                }

            </section>
        </>
     );
}

export default Profile;