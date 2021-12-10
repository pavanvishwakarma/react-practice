import React,{useState} from "react";

export default function Hideshow(){

    const[status, setStatus] = useState(false)
    return(
        <div>
        {
            status? <h2>Hide Show</h2>: null
        }
            <button className="clickBtn" onClick={()=>setStatus(false)}>Hide</button>
            <button className="clickBtn" onClick={()=>setStatus(true)}>Show</button>

            <button className="clickBtn" onClick={()=>setStatus(!status)}>Toggle</button>
        </div>
    )
}