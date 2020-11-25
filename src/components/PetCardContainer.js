import React from 'react';
import PetCard from './PetCard'
import { Container, Row, Col } from "react-bootstrap";

const PetCardContainer = (props) => {

    const pets = props.pets.map((pet,index) =>(
        <PetCard key={index} pet={pet}/>
    ))
    return (
        <div className="pet-container">
            {pets}
        </div>
    );
}

export default PetCardContainer;
