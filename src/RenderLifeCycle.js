import React from "react";

class RenderLifeCycle extends React.Component{

    // This is render life cycle method
    render(){
        console.log(this.props);
        return(
            <div>
                <h2>Hello Render Life Cycle Method </h2>
                
            </div>
        )
    }
}
export default RenderLifeCycle;