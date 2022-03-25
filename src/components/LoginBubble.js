import {BrowserRouter as Router,Routes, Route, Navigate, HashRouter,Link} from "react-router-dom"

import {useState} from "react"
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";


const LoginBubble = ({setLoged}) => {
    const [login, setLogin] = useState(false);
    const [register, setRegister] = useState(false);
    const [registered, setRegistered] = useState(false);

    let backFunction = ()=>{
        setLogin(false)
        setRegister(false)
    }


    return ( 
        <div className="container">
            <div className="main-bubble">
                {/*backButton*/}
            
                {( (login && !register) || (!login && register) ) && <button onClick={backFunction}><img src="back-button.svg"/></button>}

                {/*Main Bubble Login/Register*/}

                <div class="text-container">
                    <h1>{login ? "Welcome" : ( register ? "Register" : (registered ? "" : "Bubble Chat") ) }</h1>
                </div>

                <div className="btn-box">
                { (login||register||registered) || <button onClick={() => setLogin(true)}>Login</button>}
                { (login||register||registered) || <button onClick={() => setRegister(true)}>Register</button>}
                </div>

                {/*Login Section*/}

                { (login && !register) && <LoginForm setLoged={setLoged}/>}

                {/*Register Section*/}

                { (!login && register) && <RegisterForm setRegister={setRegister} setRegistered={setRegistered}/>}

                {/*You are registered Message!*/}

                { (registered) && <h3>You are registered!</h3>}
            </div>
        </div>
     );
}
 
export default LoginBubble;