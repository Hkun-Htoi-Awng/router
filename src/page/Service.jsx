import "./page.css"
import {useNavigate,useLocation} from "react-router-dom"

const Service = () => {

    const location = useLocation()
    const nav = useNavigate();

    const handleClick = () => {
        nav(-1)
    }

    return(
        <div className="container">
            <div>
                <h1>service</h1>
                <p>{location.state?.text}</p>
                <button onClick={handleClick}>back</button>
            </div>
        </div>
    )
}
export default Service