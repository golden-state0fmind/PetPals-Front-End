import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import RelationshipModel from "../models/relationship";
import PetCardContainer from '../components/PetCardContainer'


const AllPets = (props) => {
    const [pets, setPets] = useState([])
    const [userId] = useState(localStorage.getItem('id'))

    const fetchUserPets = () => {
        RelationshipModel.one(userId).then(user => {
            setPets(user.user.pets)
        })
    }

    useEffect(() => { fetchUserPets() }, [])


    console.log(pets)
    return (
        <div>
            <h1>All Pets Page</h1>
            <button> <Link to="/addpet">Add A Pet</Link> </button>
            <PetCardContainer pets={pets} />
        </div>
    )
}

export default AllPets