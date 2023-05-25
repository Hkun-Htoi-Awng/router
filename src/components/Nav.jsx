import "./Nav.css"
import { Link,NavLink } from "react-router-dom";


const Nav = () => {

    return(
        <div className="NavContainer">
            <ul>
                 <li>
                    <NavLink  to={'/'}>Home</NavLink >
                 </li>
                 <li>
                    <NavLink  to={'/about'}>About</NavLink >
                 </li>
                 <li>
                    <NavLink  to={'/service'}>Service</NavLink >
                 </li>
                 <li>
                    <NavLink  to={'/contact'}>Contact</NavLink >
                 </li>
                 <li>
                     <NavLink  to={'/nest'}>nest</NavLink >
                 </li>
            </ul>
        </div>
    )
}
export default Nav