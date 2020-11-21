import React, {useState} from 'react'
import {Link} from 'react-router-dom'

const PetCard = (props) => {
  const [userId] = useState(localStorage.getItem('id'))

  const allPets = props.pets.map((pet, index) => (
    <>
      {
        userId == pet.userId ?
          <div key={index}>
            <img className="allpet-pic" src={pet.imgUrl} alt="current users pets"></img>
            {pet.name}
            {pet.species}
            {pet.birthdate}
            <button><Link to={`/pet/${pet.id}/edit`}>Edit Pet</Link></button>
          </div>
          : ""}
    </>
  ))

  return (
    <div>
      {allPets}
    </div>
  )
}

export default PetCard
