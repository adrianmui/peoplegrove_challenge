import React, { Component } from 'react';
import List from './List';
import Task from './Task';
import axios from 'axios';

class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8081/api/tasks')
      .then(res => {
        const tasks = res.data.map( res => res);
        this.setState({tasks});
      });
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
          <div className="page-header col-xs-8">
            Tasks that belong to Me
          </div>
        </div>
        <div className="row">
          <div className="col-xs-3">
            { 
              this.state.tasks.map( task => 
              <Task details={task}/> )
            }
          </div>
        </div>
      </div>
    )
  }
};

export default Landing;