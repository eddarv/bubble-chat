import {BrowserRouter as Router,Routes, Route, Navigate, HashRouter,Link} from "react-router-dom"
import LoginBubble from "./LoginBubble";
import Home from "./Home";
import {useState} from "react"

const MyRoutes = () => {

    const [loged, setLoged] = useState(false);

    return ( 
        <>
            <Router>
                <Routes>
                    <Route path="/" element={ loged ? <Navigate to="/home"/> : <LoginBubble setLoged={setLoged} /> }/>
                    <Route path="/home/*" element={<Home/>}>
                        <Route path="friends" element={<h4>friends</h4>}/>
                        <Route path="groups" element={<h4>groups</h4>}/>
                        <Route path="world" element={<h4>world</h4>}/>
                        <Route path="favorites" element={<h4>favorites</h4>}/>
                        <Route path="*" element={<Navigate to="/home/friends"/>} />
                    </Route>
                    <Route path="*" element={ <Navigate to="/"/> } /> 
                </Routes>
            </Router>
        </>
     );
}
 
export default MyRoutes;