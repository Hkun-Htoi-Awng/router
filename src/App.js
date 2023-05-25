import Home from "./page/Home"
import Contact from  "./page/Contact"
import About from "./page/About"
import Service from "./page/Service"
import Nav from "./components/Nav"
import Error from "./page/Error"
import Admin from "./page/Admin"
import Nest from "./page/Nest"
import One from "./page/Nest/One"
import Two from "./page/Nest/Two"
import Three from "./page/Nest/Three"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

const App = () => {
    return (
        <>
            <Router>
                <Nav/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/service" element={<Service/>}/>
                    <Route path="/contact/:name" element={<Contact/>}/>

                    <Route path="/nest" element={<Nest/>}>
                        <Route index element={<One/>}/>
                        <Route path="two" element={<Two/>}/>
                        <Route path="three" element={<Three/>}/>
                    </Route>

                    <Route path="/admin" element={<Admin/>}/>
                    <Route path="*" element={<Error/>}/>
                </Routes>
            </Router>
        </>
    )
}
export default App
