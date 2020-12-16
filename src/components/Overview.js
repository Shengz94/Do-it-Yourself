import React, { Component } from "react";

class Overview extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <ul>
                    {this.props.tasks.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        )
    }

}

export default Overview;