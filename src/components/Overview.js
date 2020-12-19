import React, { Component } from "react";

class Overview extends Component {

    constructor(props){
        super(props);

        this.state = {idToEdit: '', newTask: ''};
        this.handleChange = this.handleChange.bind(this);
        this.editTaskForm = this.editTaskForm.bind(this);
        this.editTask = this.editTask.bind(this);
        this.displayRow = this.displayRow.bind(this);
    }

    handleChange(e){
        this.setState({newTask: e.target.value});
    }

    editTaskForm(rowId, item){
        this.setState({idToEdit:rowId, newTask:item})
    }

    editTask(item){
        this.props.editTask(item, this.state.newTask);
        this.setState({idToEdit:'', newTask:''})
    }

    displayRow(item, rowId, index){
        if(rowId !== this.state.idToEdit){
            return <div>
                <li>{index + ".- " + item}</li>
                <button onClick={(e) => this.props.removeTask(item, e)}>Remove</button>
                <button onClick={(e) => this.editTaskForm(rowId,item , e)}>Edit</button>
            </div>;
        }
        return <div>
            <input value={this.state.newTask} onChange={this.handleChange}></input>
            <button onClick={(e) => this.editTask(item, e)}>Confirm</button>
        </div>
        
    }

    render(){
        return(
            <div>
                <ul>
                    {this.props.tasks.map((item, index) => {
                        const rowId = item;
                        return <div  key={rowId}>
                            {this.displayRow(item,rowId, index)}
                        </div>
                })}
                </ul>
            </div>
        )
    }

}

export default Overview;