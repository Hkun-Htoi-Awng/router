import {Outlet} from "react-router-dom"
import {Link} from "react-router-dom"

const Nest = () => {
    return (
        <div style={{display:"flex"}}>
            <div>
                <ul>
                    <li>
                        <Link to={"/nest"}>one</Link>
                    </li>
                    <li>
                        <Link to={"/nest/two"}>two</Link>
                    </li>
                    <li>
                       <Link to={"/nest/three"}>three</Link>
                    </li>
                </ul>
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    )
}
export default Nest