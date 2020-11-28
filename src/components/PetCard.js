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
      {/* {userId === props.pet.userId ? <button><Link to={`/pet/${props.pet.id}/edit`}>Edit Pet</Link></button> : ""} */}
      <button><Link to={`/pet/${props.pet.id}/edit`}>Edit Pet</Link></button>
    </div>
    : ""}
 
    </>

  )
}

export default PetCard
