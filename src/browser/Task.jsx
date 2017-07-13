import React from 'react';
import DateConverter from './../utils/dateCoverter.js';

const Task = props => {
  const { id, UserId, title, delivery, createdAt } = props.details;
  const isNew = DateConverter().isDayOld(createdAt);
  const date = DateConverter().prettyPrint(createdAt);

  console.log(isNew, date);

  return (
    <div className={'panel panel-primary col-sm-4 ' + (isNew ? '' : 'blur-me')}>
      <div className="panel-heading col-sm-12">
        {id}: {title}
      </div>
      <div className="panel-body col-sm-12">
        delivery difficulty <code>{delivery}</code>
      </div>
      <div className="panel-footer col-sm-12">
        <span>user_id: {UserId} </span>
        <span className={'btn btn-md btn  float-right ' + (isNew ? 'btn-success' : 'disabled btn-warning')}>created: {date} </span>
      </div>
    </div>
  );
};

export default Task;