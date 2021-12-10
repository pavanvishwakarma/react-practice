import React from "react";

class Home extends React.Component{
    componentWillUnmount(){
        alert("Component Will Unmount");
    }
    render(){
        return(
            <div>
                <h3>Home Component</h3>
                {/* <samll >Home Component Paragraph</samll> */}
            </div>
        )
    }  
}
export default Home;