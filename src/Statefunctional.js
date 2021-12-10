import { useState } from "react";

export default function Statefunctional(){

    const[data, setData] = useState("React JS");
    const[buttonText, setBtnData] = useState("Click Me");
    function updateData(){
        setData("State Functional Component");
        setBtnData(buttonText);
    }
    console.log("________Updated______");
    return(
        <div>
            <h2>{data}</h2>
            <button onClick={()=>updateData()} className="clickBtn">{buttonText}</button>
        </div>
        
    )
}