import React, { Component } from "react";
import Overview from "./components/Overview";
import "./App.css"

class App extends Component {

  constructor(props){
    super(props);

    this.state = { 
      task: '', 
      tasks: [] 
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitTask = this.submitTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }
  
  handleChange(e) {
    this.setState({task: e.target.value});
  }

  submitTask(){
    this.setState((state) => {
      const temporalTasks = state.tasks.concat(state.task);
      return {tasks: temporalTasks, task: ""};
    });
  }

  removeTask(item){
    this.setState((state) => {
      const temporalTasks = state.tasks.filter(task => task !== item);
      return {tasks: temporalTasks, task: ""};
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
        <Overview tasks={tasks} removeTask={this.removeTask}/>
      </div>
    );
  }
}

export default App;
