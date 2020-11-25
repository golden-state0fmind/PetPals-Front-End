import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { Container } from 'react-bootstrap'



const PetCard = (props) => {
  const [userId] = useState(localStorage.getItem('id'))


 
  console.log(props.pet)
  return (
    <div className="pet-card">
      <img className="pet-card-img" src={props.pet.imgUrl} alt=""/>
      <h4>{props.pet.name}</h4>
      <p>{props.pet.birthdate}</p>
    </div>


  //   <Card style={{ width: '18rem' }}>
  //   <Card.Img variant="top" src={props.pet} />
  //   <Card.Body>
  //     <Card.Title>Card Title</Card.Title>
  //     <Card.Text>
  //       Some quick example text to build on the card title and make up the bulk of
  //       the card's content.
  //     </Card.Text>
  //     <Button variant="primary">Go somewhere</Button>
  //   </Card.Body>
  // </Card>
  )
}

export default PetCard
