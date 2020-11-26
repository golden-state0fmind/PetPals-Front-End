import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { Container } from 'react-bootstrap'



const PetCard = (props) => {
  const [userId] = useState(localStorage.getItem('id'))


  
  console.log(props.pet)
  return (
     <>
    {props.pet ? 
    <div className="pet-card">
      <img className="pet-card-img" src={props.pet.imgUrl} alt=""/>
      <h4>{props.pet.name}</h4>
      <p>{props.pet.birthdate}</p>
    </div>
    : "dothis"}
 
    </>

  )
}

export default PetCard
