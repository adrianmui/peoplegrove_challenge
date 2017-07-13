import React, { Component } from 'react';
import axios from 'axios';

class TaskForm extends Component {
  constructor(props) {
    super(props);
    console.log(this);
    this.state = {
      title: '',
      delivery: 1
    };

    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.createTask = this.createTask.bind(this);
  }
  
  handleClearForm(event) {
    event.preventDefault();
    this.setState({title: '', delivery: ''});
  }

  handleChange(event) {
    let newState = this.state;
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  }

  handleSubmit(event) {
    event.preventDefault();
    this._createTask(this.state)
      .then(task => {
        this.props.onChildChange('new task' , task);
      });
    
  }

  _createTask(details) {
    return axios.post('http://localhost:8081/api/tasks',
    details);
  }

  render() {
    return (
      <div className="panel panel-danger col-sm-4">
        <div className="panel-heading col-sm-12">
          New/Edit Task
        </div>
        <div className="panel-body col-sm-12">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label className="form-label" for="title">Title</label>
              <textarea
                className="form-control"
                name="title"
                id="title"
                rows='1'
                value={this.state.title}
                onChange={this.handleChange}
                placeholder={this.state.title} />
            </div>
            
            <div className="form-group">
              <label className="form-label" for="delivery">Delivery Difficulty</label>
              <select className="form-control"
                name="delivery"
                id="delivery"
                value={this.state.delivery}
                onChange={this.handleChange}>
                  { 
                  [...Array(5)].map((x, i) => 
                    <option value={i}
                      selected={this.state.delivery === i}> {i} 
                    </option>)
                  }
              </select>
            </div>
            <input
              type="submit"
              className="btn btn-primary float-right"
              value="Submit"/>
            <button
              className="btn btn-link float-left"
              onClick={this.handleClearForm}>
              Clear form
            </button>
          </form>
        </div>
      </div>
    
    )
  } 
};


export default TaskForm;