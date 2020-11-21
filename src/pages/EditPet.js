import React, { useState, useEffect } from 'react'
import PetModel from '../models/pet'

const EditPet = (props) => {

    const [name, setName] = useState('')
    const [birthdate, setBirthdate] = useState('')
    const [petId] = useState(props.match.params.id)
    const [userId] = useState(localStorage.getItem('id'))
    const fetchPet = () => {
        PetModel.one(props.match.params.id).then((petData) => {
            setName(petData.pet.name)
            setBirthdate(petData.pet.birthdate)
        })
    }

    useEffect(() => { fetchPet() }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("ARE WE CLICKING POST?", name, birthdate, petId)
        PetModel.update({
            name,
            birthdate
        }, petId).then(data => {
            console.log("DID YOU FINISH WIT HTHE BACK END?")
            props.history.push('/')
        })
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        onChange={(e) => { setName(e.target.value) }}
                        rows="5"
                        cols="40"
                        type="text"
                        id="name"
                        name="name"
                        placeholder="(e.g. George)"
                        value={name}
                    /><br />
                    <label htmlFor="birthdate">Birthdate:</label>
                    <input
                        onChange={(e) => { setBirthdate(e.target.value) }}
                        rows="5"
                        cols="40"
                        type="date"
                        id="birthdate"
                        name="birthdate"
                        value={birthdate}
                    /><br />
                </div>
                <button type="submit">Update</button>
            </form>
        </div>
    )
}



export default EditPet