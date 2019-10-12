import React, {useState} from 'react';
import './index.css';

const Form = props => {
  const [teamMember, setTeamMember] = useState({memberName:"", email:"", role:""});
 
  const handleChange = e => {
    setTeamMember({...teamMember, [e.target.name]: e.target.value});
  };
  

  const handleSubmit = e => {
    e.preventDefault();
    setTeamMember({memberName:'', email:'', role:''});
    props.addMemberFn(teamMember);
    //console.log("Member Info", teamMember);
  };

  return (
    <div className="form-container">
    <h2 className="title">Add a Team Member</h2>

    <form onSubmit={e => handleSubmit(e)}>
      <label>
        Name:
        <input 
          type="text" 
          id="memberName"
          name="memberName"
          value={teamMember.memberName}
          onChange={e => handleChange(e)} 
        />
      </label>

      <label>
        Email:
        <input 
          type="text"
          id="email"
          name="email" 
          value={teamMember.email}
          onChange={e => handleChange(e)} 
        />
      </label>

      <label>
        Role:
        <select
          type="select"
          id="role"
          name="role"
          value={teamMember.role}
          onChange={e => handleChange(e)}
        >
          <option>Plese Select A Role</option>
          <option value="frontend engineer">FrontendEngineer</option>
          <option value="backend engineer">BackendEngineer</option>
          <option value="UX designer">UX Designer</option>
          <option value="iOS engineer">iOS Engineer</option>
        </select>
      </label>

      <button className="sub-button">Add New Member!!</button>
    </form>
    </div>
  )
};

export default Form;