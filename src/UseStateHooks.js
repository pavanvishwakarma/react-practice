import { useState } from "react";

function UseStateHooks(){

    const [data, setData] = useState("useState Hooks");

    return(
        <div>
            <h2>{data}</h2>
            <button className="clickBtn" onClick={()=>setData("useState Hooks Updated")}>Update State</button>
        </div>
    );
}
export default UseStateHooks;