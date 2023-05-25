import "./page.css";
import {useSearchParams} from "react-router-dom";
import {useRef} from "react";

const About = () => {

    const [query,setQuery] = useSearchParams();
    const formRef = useRef();

    const handleClick = (e) => {
          e.prevenDefault();
         setQuery({name:formRef.current[0].value,age:formRef.current[1].value})
    }
    const handleGet = () => {
          console.log(query.get("name"),query.get("age"))
    }



    return(
        <div className="container">
            <form ref={formRef}>
                <input type="text" name="name" id=""/>
                <input type="number" name="age" id=""/>
                <button onClick={handleClick}>Click</button>
            </form>
            <button onClick={handleGet}>Get</button>
        </div>
    );
};
export default About

