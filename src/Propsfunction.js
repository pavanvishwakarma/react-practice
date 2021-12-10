import React,{useState} from 'react';
export default function Propsfunction(prop){
    const[name, setName] = useState(prop.name)
    const[email, setEmail] = useState(prop.email)
    function updateData(){
        setName("Radhe")
        setEmail("radhe@gmail.com")
    }
    
    // console.log(prop.name);
    return(
        <div style={{backgroundColor:"#282c34", borderRadius:10,margin:10, padding: "25px 20px", color: "#61dafb", border: "1px solid #61dafb"}}>
            <img src={prop.src} className="profileImg" alt="logo" />
            <h2 style={{margin:"5px 0"}}>Hello {name}</h2>
            <h6 style={{margin:"5px 0"}}>Email: {email}</h6>
            <button className="clickBtn" onClick={()=>updateData()}>Update</button>
        </div>
    )
}