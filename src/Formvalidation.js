import React, { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
function Formvalidation() {
    const [name, setName] = useState("");
    const [pass, setPass] = useState("");
    const [userErr, setUserErr] = useState(false);
    const [passErr, setPassErr] = useState(false);
    function loginHandle(e) {

        if (name.length < 3 || pass.length < 3) {
            alert("Please Input Valid !");
        }
        else {
            alert("All Good (~_~)");
        }

        e.preventDefault();
    }
    function userHandle(e) {
        let item = e.target.value;
        if (item.length < 3) {
            setUserErr(true);
        } else {
            setUserErr(false);
        }
        setName(item);
    }
    function passHandle(e) {
        let item = e.target.value;
        if (item.length < 3) {
            setPassErr(true);
        } else {
            setPassErr(false);
        }
        setPass(item);
    }
    return (
        <div>
            <h2>Form Validation</h2>

            <form onSubmit={loginHandle} >
                <input type="text" placeholder="Enter user ID" className="inputTxt" onChange={userHandle} />
                {
                    userErr ? <span className="invalid">Invalid User</span>
                        : ""
                }
                <br />
                <input type="password" placeholder="Enter user Password" className="inputTxt" onChange={passHandle} />
                {
                    passErr ? <span className="invalid">Invalid Password </span>
                        : ""
                }<br />
                <button type="submit" className="clickBtn" >Login</button>
            </form>

        </div>
    )

}
export default Formvalidation;