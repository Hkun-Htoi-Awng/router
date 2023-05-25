import "./page.css"
import {useNavigate} from "react-router-dom"
import {useRef} from "react"

const Home = () => {

    const inputRef = useRef()

    const nav =useNavigate();

    const handleClick = () => {

        nav("service",{state:{text:inputRef.current.value}})
    }
    return(
        <div className="container">
            <div>
                <h1>Home</h1>
                <input ref={inputRef} type="text"/>
                <button onClick={handleClick}>Click</button>
            </div>
        </div>
    )
}
export default Home