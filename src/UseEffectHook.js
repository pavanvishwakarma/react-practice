import React, { useEffect, useState } from "react";
import PropsUseEffectHook from "./PropsUseEffectHook";

function UseEffectHook() {

    const [data, setData] = useState(10);
    const [count, setCount] = useState(100);

    useEffect(() => {
        console.log("Data UseEffect");
    },[data]) // specific state called

    useEffect(() => {
        console.log("Count UseEffect");
    },[count]) // specific state called

    return (
        <div>
            <h2>UseEffectHook Count : {count}</h2>
            <h2>UseEffectHook Data {data}</h2>

            <PropsUseEffectHook data={data} count={count} /> {/* This is Props use */}
            

            <button className="clickBtn" onClick={()=>setCount(count+1)}>Count Update</button>
            <button className="clickBtn" onClick={()=>setData(data+1)}>Data Update</button>
        </div>
    );
}

export default UseEffectHook;