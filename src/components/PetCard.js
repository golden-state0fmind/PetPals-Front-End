import React, {useState} from 'react'
import {Link} from 'react-router-dom'




const PetCard = (props) => {
  const [userId] = useState(localStorage.getItem('id'))

  return (
     <>
    {props.pet !== undefined ? 
    <div className="pet-card">
      <img className="pet-card-img" src={props.pet.imgUrl} alt=""/>
      <h4>{props.pet.name}</h4>
      <p>{props.pet.birthdate}</p>
    </div>
    : <p>Add</p>}
 
    </>

  )
}

export default PetCard
