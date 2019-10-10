import React, {useState} from 'react';


const Form = () => {
  const [teamMember, setTeamMember] = useState({name:"", email:"", role:""});
  const [name, setName] = useState("");
  const[email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const handleNameChange = e => {
    setTeamMember({...teamMember, name: e.target.value});
  };
  const handleEmailChange = e => {
    setTeamMember({...teamMember, email: e.target.value});
  };
  const handleRoleChange = e => {
    setTeamMember({...teamMember, role: e.target.value})
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(teamMember);
  };

  return (
      <form onSubmit={e => handleSubmit(e)}>
        <label>
          Name:
          <input 
            type="text" 
            name="name"
            onChange={e => handleNameChange(e)} 
          />
        </label>

        <label>
          Email:
          <input 
            type="text"
            name="email" 
            onChange={e => handleEmailChange(e)} 
          />
        </label>

        <label>
          Role:
          <select
            type="select"
            name="role"
            onChange={e => handleRoleChange(e)}
          >
            <option value="frontend engineer">Frontend Engineer</option>
            <option value="backend engineer">Backend Engineer</option>
            <option value="UX designer">UX Designer</option>
            <option value="iOS engineer">iOS Engineer</option>
          </select>
        </label>

        <button>Submit!!</button>
      </form>
  )
};

export default Form;