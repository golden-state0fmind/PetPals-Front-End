import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import PetCard from '../components/PetCard'
import PetModel from '../models/pet'

const AllPets = (props) => {
    const [pets, setPets] = useState([])


    const fetchPets = () => {
        PetModel.all().then((petData) => {
            setPets(petData.pets)
        })
    }

    useEffect(()=> {fetchPets()},[])


    return (
        console.log(pets)
        <div>
            <h1>All Pets Page</h1>
            {/* <PetCard pets={pets}/> */}
        </div>
    )
}

export default AllPets