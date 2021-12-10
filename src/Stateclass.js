import React from "react";

export default class Stateclass extends React.Component{
    constructor(){
        super();
        this.state={
            data: 0,
            btnTxt: "Update"
        }
    }
    updateData(){
        this.setState({data:this.state.data+1})
    }
    render(){
        return(
            <div>
                <h2>{this.state.data}</h2>
                <button className="clickBtn" onClick={()=>this.updateData()}> {`Click To Add 1 + ${this.state.data}`}</button>
            </div>
        )
    }
}