import React, { useState } from 'react'

const App = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();

    if(name === '' || email === '') {
      alert('Please fill in all fields');
      return;
    }

    if(!email.includes('gmail.com')){
      alert('Please enter a valid Gmail address');
      return;
    }

    alert(`Name: ${name}, Email: ${email}`);

    setName('');
    setEmail('');
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="container">
          <input type="text" placeholder="Enter your Name" value={name} onChange={handleNameChange} />
          <input type="email" placeholder="Enter your Email Id" value={email} onChange={handleEmailChange} />
          <button type="submit">Submit</button>
        </div> 
      </form>
    </div>
  )
}

export default App
