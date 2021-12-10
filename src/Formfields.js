import { useState } from "react";

export default function Formfields(prop){

    const[name, setName] = useState("")
    const[tnc, setTnc] = useState(false)
    const[select, setSelect] = useState("")

    function getFormData(e){
        e.preventDefault();
        console.log(name, tnc, select)
    }
    return(
        <div>
            <img src={prop.src} className="profileImg" alt="logo" />
            <h2>Form</h2>
            <form onSubmit={getFormData} >
                <input type="text" placeholder="Enter Name" className="inputTxt" onChange={(e)=>setName(e.target.value)} /><br /><br />
                <select onChange={(e)=>setSelect(e.target.value)}>
                    <option>Select Option</option>
                    <option>Option One</option>
                    <option>Option Two</option>
                </select>
                <br /><br />
                <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)} /><span>Accepts T & C.</span>
                <br /><br />
                <button type="submit" className="clickBtn" >Submit</button>
            </form>
        </div>
    )
}