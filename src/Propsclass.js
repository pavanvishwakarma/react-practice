import React from "react";

export default class Propsclass extends React.Component{

    render(){
        return(
            <div style={{backgroundColor:"#282c34", borderRadius:10,margin:10, padding: "25px 20px", color: "#61dafb", border: "1px solid #61dafb"}}>
            <img src={this.props.src} className="profileImg" alt="logo" />
            <h2 style={{margin:"5px 0"}}>Hello {this.props.name}</h2>
            <h6 style={{margin:"5px 0"}}>Email: {this.props.email}</h6>
            {/* <button className="clickBtn" onClick={()=>updateData()}>Update</button> */}
        </div>
        )
    }
}