import React, {useState, useEffect} from 'react'
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
            <h1>All Pets Page</h1>
            {/* <PetCard pets={pets}/> */}
        </div>
    )
}

export default AllPets