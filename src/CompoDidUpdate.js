import React from "react";

class CompoDidUpdate extends React.Component{
    constructor(){
        super();
        console.log("Constructor");
        this.state={
            count: 0
        }
    }
    componentDidUpdate(preProps, preState, snapshot){
        console.log("Component Did Update", preState.count, this.state.count);
        // if(preState.count === this.state.count){
        //     alert("Data is Already Same!");
        // }

        
        // this.setState({count: this.state.count+1}) //this is Infinity count
        if(this.state.count < 10){
            this.setState({count: this.state.count+1})
        }
    }
    render(){
        console.log("Render");
        return(
            <div>
                <h2>(Component Did Update) name : {this.state.count}</h2>
                <button className="clickBtn" onClick={()=>this.setState({count:1})}>Update</button>
            </div>
        );
    }
}
export default CompoDidUpdate;