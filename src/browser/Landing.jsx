import React, { Component } from 'react';
import Task from './Task';
import TaskForm from './TaskForm';
import axios from 'axios';

class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      editing: undefined
    };

    this.onChildChange = this.onChildChange.bind(this);
  }

  componentDidMount() {
    console.log('Landing componentDidMount');
    axios.get('http://localhost:8081/api/tasks')
      .then(res => {
        const tasks = res.data.map( res => res);
        this.setState({tasks});
      });
  }

  onChildChange(a, data) {
    if (a == 'new task') {
      let newState = this.state;
      let newStack = this.state.tasks;
      newStack.push(data.data);
      this.setState(newState);
    }
  }

  render() {
    return (
      <div className="container">
        
        <div className="row">
          <div className="page-header col-xs-8">
            Create New Task
          </div>
        </div>

        <div className="row">
          <TaskForm onChildChange={this.onChildChange}/>
        </div>
  
        <div className="row">
          <div className="page-header col-xs-8">
            Tasks that belong to Me
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12">
            { 
              this.state.tasks.map( task => 
                
                <Task details={task}/> 
              
              )
            }
          </div>
        </div>
      </div>
    )
  }
};

export default Landing;