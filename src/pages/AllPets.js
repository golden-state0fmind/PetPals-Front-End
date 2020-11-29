import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import RelationshipModel from "../models/relationship";
import PetCardContainer from '../components/PetCardContainer'
import '../css/allPets.css'

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
        <div className="allp-body">
            <h1 className="allp-heading">My Pets</h1>
            <button className="allp-button"> <Link className="allp-link" to="/addpet">Add Pet</Link></button>
            <PetCardContainer pets={pets} />
        </div>
    )
}

export default AllPets