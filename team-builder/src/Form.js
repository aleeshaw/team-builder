import React, {useState} from 'react';


const Form = () => {
  const [teamMember, setTeamMember] = useState({memberName:"", email:"", role:""});
 
  const handleChange = e => {
    setTeamMember({...teamMember, [e.target.name]: e.target.value});
  };
  

  const handleSubmit = e => {
    e.preventDefault();
    console.log(teamMember);
    console.log(teamMember.memberName);
    console.log(teamMember.email);
    console.log(teamMember.role);
  };

  return (
      <form onSubmit={e => handleSubmit(e)}>
        <label>
          Name:
          <input 
            type="text" 
            name="memberName"
            onChange={e => handleChange(e)} 
          />
        </label>

        <label>
          Email:
          <input 
            type="text"
            name="email" 
            onChange={e => handleChange(e)} 
          />
        </label>

        <label>
          Role:
          <select
            type="select"
            name="role"
            onChange={e => handleChange(e)}
          >
            <option>Plese Select A Role</option>
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