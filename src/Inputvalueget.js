import React,{useState} from "react";


export default function Inputvalueget(props){

    const [data, setData] = useState(null)
    const [print, setPrint] = useState(false)

    function update(val){
        console.log(val.target.value)
        setData(val.target.value)
        setPrint(false)
    }
    return(
        <div style={{backgroundColor:"#282c34", borderRadius:10,margin:10, padding: "25px 20px", color: "#61dafb", border: "1px solid #61dafb"}}>
            <img src={props.src} className="profileImg" alt="logo" />
            <h2>{props.name}</h2>
            {
                print?
                <h6 style={{margin:"5px 0"}}>{data}</h6>
                :null
            }
            {/* <h6 style={{margin:"5px 0"}}>{print}</h6> */}
            <input type="text" onChange={update} className="inputTxt" />
            <button className="clickBtn" onClick={()=>setPrint(true)}>Update</button>
        </div>
    )
}