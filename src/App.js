import React, { Component } from "react";
import Overview from "./components/Overview";

class App extends Component {

  constructor(props){
    super(props);

    this.state = { 
      task: '', 
      tasks: [] 
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitTask = this.submitTask.bind(this);
  }
  
  handleChange(e) {
    this.setState({task: e.target.value});
  }

  submitTask(){
    this.setState((state) => {
      const temporalTasks = state.tasks.concat(state.task);
      return {tasks: temporalTasks};
    });
  }
  
  render(){
    const task = this.state.task;
    const tasks = this.state.tasks;
    return (
      <div className="App">
        <fieldset>
          <legend>Input task:</legend>
          <input value={task} onChange={this.handleChange}/>
        </fieldset>
        <button onClick={this.submitTask}>Submit</button>
        <Overview tasks={tasks}/>
      </div>
    );
  }
}

export default App;
