import React, { useState } from 'react';
import './form.scss';

const Form = () => {
  // State variables for form fields
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setStatus] = useState('');

 
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted Sucessfuly");
  };

  return (
    <div className="formMain">
<form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" value={email} placeholder='abc@gmail.com' onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <label>
        Name:
        <input type="text" value={name} placeholder='John Smith' onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Age:
        <input type="number" value={age} placeholder='22' onChange={(e) => setAge(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} placeholder='22' onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button disabled={!name} type="submit">Add</button>
    </form>
    </div>
    
  );
};

export default Form;
