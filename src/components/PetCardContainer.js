import React from 'react';
import PetCard from './PetCard'
import {Link} from 'react-router-dom'

const PetCardContainer = (props) => {
    const pets = props.pets.map((pet,index) =>(
        <PetCard key={index} pet={pet}/>
    ))
    return (
        <div className="pet-container">
            {pets.length>= 1 ? pets: <Link to="/addpet">Add A Pet</Link>}
        </div>
    );
}

export default PetCardContainer;
