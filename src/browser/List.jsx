import React, {Component} from 'react';

class List extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = this.context.data || {items: []};
  }

  componentDidMount() {
    this.fetchList();
  }

  fetchList() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(res => {
        return res.json();
      })  
      .then(data => {
        this.setState({
          items: data
        });
      })  
      .catch(err => {
        console.log(err);
      }); 
  }

  render() {
    return (
      <ul>
        {this.state.items.map(item => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    );  
  }
}


export default List;