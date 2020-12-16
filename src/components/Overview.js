import React, { Component } from "react";
import uniqid from "uniqid"

class Overview extends Component {

    render(){
        return(
            <div>
                <ul>
                    {this.props.tasks.map((item, index) => (
                        <div  key={uniqid()}>
                            <li>{index + ".- " + item}</li>
                            <button onClick={(e) => this.props.removeTask(item, e)}>Remove</button>
                        </div>
                    ))}
                </ul>
            </div>
        )
    }

}

export default Overview;