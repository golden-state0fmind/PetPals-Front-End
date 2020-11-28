import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import PetCard from '../components/PetCard'
import PetModel from '../models/pet'
import PetCardContainer from '../components/PetCardContainer'

const AllPets = (props) => {
    const [pets, setPets] = useState([])


    const fetchPets = () => {
        PetModel.all().then((petData) => {
            setPets(petData.pets)
        })
    }

    useEffect(()=> {fetchPets()},[])


    console.log(pets)
    return (
        <div>
            <h1>All Pets Page</h1>
            {/* <PetCard pets={pets}/> */}
            <PetCardContainer pets={pets} />
        </div>
    )
}

export default AllPets