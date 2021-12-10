import React, { useEffect } from "react";

function PropsUseEffectHook(props) {

    useEffect(() => {
        console.log("Data UseEffect");
    },[props.data]) // specific state props called 

    return (
        <div>
            <h2>Props Count : {props.count}</h2>
            <h2>Props Data {props.data}</h2>
        </div>
    );
}

export default PropsUseEffectHook;