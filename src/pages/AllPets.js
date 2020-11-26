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
        <div>
            <h1>Your Pets</h1>
            <button> <Link to="/addpet">Add A Pet</Link> </button>
            <PetCard pets={pets}/>
        </div>
    )
}

export default AllPets