import {BrowserRouter as Router,Routes, Route, Navigate, HashRouter,Link} from "react-router-dom"
import LoginBubble from "./LoginBubble";
import Home from "./Home";
import {useState} from "react"
import Profile from "./Profile";

const MyRoutes = () => {

    const [loged, setLoged] = useState(false);

    return ( 
        <>
            <Router>
                <Routes>
                    <Route path="/" element={ loged ? <Navigate to="/home"/> : <LoginBubble setLoged={setLoged} /> }/>
                    <Route path="/home/*" element={<Home/>}>
                        <Route path="" element={""}/>
                        <Route path="friends" element={<h4> - Friends</h4>}/>
                        <Route path="groups" element={<h4> - Groups</h4>}/>
                        <Route path="world" element={<h4> - World Chat</h4>}/>
                        <Route path="favorites" element={<h4> - Favorites</h4>}/>
                        <Route path="*" element={<Navigate to="/home"/>} />
                    </Route>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/user/:username" element={<Profile/>}/>
                    <Route path="*" element={ <Navigate to="/"/> } /> 
                </Routes>
            </Router>
        </>
     );
}
 
export default MyRoutes;