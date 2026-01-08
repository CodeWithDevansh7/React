import React from 'react'

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.image} alt="Placeholder" />
      <h1>{props.name} , {props.age}</h1>
      <p>{props.description}</p>
      <button>View Profile</button>
    </div>
  )
}

export default Card
