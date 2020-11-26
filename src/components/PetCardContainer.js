import React from 'react';
import PetCard from './PetCard'

const PetCardContainer = (props) => {
    console.log(props.pets)
    const pets = props.pets.map((pet,index) =>(
        <PetCard key={index} pet={pet}/>
    ))
    return (
        <div className="pet-container">
            {pets.length>= 1 ? pets: <p>No pets added</p>}
        </div>
    );
}

export default PetCardContainer;
