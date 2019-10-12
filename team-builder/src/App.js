import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form.js'
import Members from './Members.js';

function App() {
  const [teamMembers, setMembers] = useState([
    {
      id: 1,
      memberName: "test member",
      email: "email@email.com",
      role: "member role"
    }
  ]);

  const addMember = teamMember => {
    const newTeamMember = {
      id: Date.now(),
      memberName: teamMember.memberName,
      email: teamMember.email,
      role: teamMember.role,

    };
    setMembers([...teamMembers, newTeamMember]);
    console.log("Members List: ",teamMembers)
  };

  return (
    <div className="App">
      <Form addMemberFn={addMember} />
      <Members className="member-list" membersList={teamMembers} />
    </div>
  );
}

export default App;
