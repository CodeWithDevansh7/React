import React from 'react'

const NameCard = () => {

    const user = "Devansh"; // use brackets to access variable in JSX
  return (
    <div className='card'>
      <h1>Hi I am {user}</h1>
      <h2>and I am learning component wise featuring in React</h2>
    </div>
  )
}

export default NameCard
