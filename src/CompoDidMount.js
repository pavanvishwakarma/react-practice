
import React from "react";

class CompoDidMount extends React.Component{
    constructor(){
        super();
        console.log("Constructor");
        this.state={
            name: "Pavan"
        }
    }
    componentDidMount(){
        console.log("Component Did Mount");
    }
    render(){
        console.log("Render");
        return(
            <div>
                <h2>(Component Did Mount) name : {this.state.name}</h2>
                <button className="clickBtn" onClick={()=>this.setState({name:"Radhe"})}>Update</button>
            </div>
        );
    }
}
export default CompoDidMount;