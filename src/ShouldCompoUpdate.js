import React from "react";
class ShouldCompoUpdate extends React.Component{
    constructor(){
        super();
        this.state={
            count: 0
        }
    }
    shouldComponentUpdate(){
        console.log("Should Component Update", this.state.count);

        if(this.state.count > 5 && this.state.count < 10){
            return true;
        }
        
    }
    render(){
        return(
            <div>
                <h2>Should Component Update {this.state.count}</h2>
                <button className="clickBtn" onClick={()=>this.setState({count: this.state.count+1})}>Update</button>
            </div>
        );
    }
}
export default ShouldCompoUpdate;