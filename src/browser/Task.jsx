import React from 'react';

const Task = props => {
  const { id, UserId, title, delivery, createdAt } = props.details;

  return (
    <div className="panel panel-primary col-sm-4">
      <div className="panel-heading col-sm-12">
        {id}: {title}
      </div>
      <div className="panel-body col-sm-12">
        delivery difficulty {delivery}
      </div>
      <div className="panel-footer col-sm-12">
        <span>user_id: {UserId} </span>
        <span>created: {createdAt}</span>
      </div>
    </div>
  );
};

export default Task;