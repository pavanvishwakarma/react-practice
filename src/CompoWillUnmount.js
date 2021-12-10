import React from "react";
import Home from "./Home";
class CompoWillUnmount extends React.Component {
    constructor() {
        super();
        this.state = {
            show: true
        }
    }
    render() {
        return (
            <div>
                <h2>CompoWillUnmount</h2>
                {
                    this.state.show ? <Home /> : <h3>Removed</h3>
                }
                <button className="clickBtn" onClick={() => this.setState({ show: !this.state.show })}>Toggle Child</button>
            </div>
        );
    }
}

export default CompoWillUnmount;