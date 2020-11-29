import React from 'react';
import PetCard from './PetCard'

const PetCardContainer = (props) => {
    const pets = props.pets.map((pet,index) =>(
        <PetCard key={index} pet={pet}/>
    ))
    return (
        <div className="pet-container">
            {pets.length>= 1 ? pets: <><img src="https://media1.giphy.com/media/1yMfsRiblWJifHQ8Zq/200.gif" alt="Oh no! You have no pets yet."/><br/><span class="noPets-text">Uh Oh! You have no pets yet!</span></>}
        </div>
    );
}

export default PetCardContainer;
