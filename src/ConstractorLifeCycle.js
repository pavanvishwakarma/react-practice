import { Component } from "react";

class ConstractorLifeCycle extends Component{
    constructor(){
        super();
        this.state={
            name: "Pavan"
        }
    }
    render(){
        return(
            <div>
                <h2>Constractor LifeCycle Method {`{ ${this.state.name} }`}</h2>
            </div>
        )
    }
}

export default ConstractorLifeCycle;