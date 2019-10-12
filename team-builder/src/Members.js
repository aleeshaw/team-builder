import React from 'react';
import './index.css';

const Members = props => {
  //console.log(props);
  return (
    <div className="members-list">
      <h3>Members:</h3>
      {props.membersList.map(member => {
        return (
          <div className="member" key={member.id}>
            <h4>{member.memberName}</h4>
            <p>{member.email}</p>
            <p>{member.role}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Members;