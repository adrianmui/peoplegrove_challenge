import React from 'react';

const Task = props => {
  const { id, title, delivery } = props.details;

  const styles = {
    padding: '0x', 
    margin: '10x 0px'
  };

  return (
    <div className="panel panel-primary col-sm-12" style={styles}>
      <div className="panel-heading col-sm-12">
        {title}
      </div>
      <div className="panel-body col-sm-12">
        delivery difficulty {delivery}
      </div>
      <div className="panel-footer col-sm-12">
        user_id: {id}
      </div>
    </div>
  );
};

export default Task;