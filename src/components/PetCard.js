import React, {useState} from 'react'

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
