import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../css/petCard.css'



const PetCard = (props) => {
  const [userId] = useState(localStorage.getItem('id'))

  return (
    <>
      {props.pet !== undefined ?
        <div className="pet-card">
          <div className="pet-image"><img className="pet-card-img" src={props.pet.imgUrl} alt="Pet" /></div>
          <div className="pet-info">
          <div className="pet-text"><h4 className="name">{props.pet.name}</h4>
          <p className="birthdate"><span className="emphasis">Birthday:</span> {props.pet.birthdate}</p></div>
          <div className="edit-pet"><Link className="edit-button" to={`/pet/${props.pet.id}/edit`}>✍️</Link></div>
          </div>
        </div> : ""}
    </>

  )
}

export default PetCard
