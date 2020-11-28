import React, { useState, useEffect } from 'react'
import PetModel from '../models/pet'

const EditPet = (props) => {

    const [name, setName] = useState('')
    const [birthdate, setBirthdate] = useState('')
    const [petId] = useState(props.match.params.id)
    const [userId] = useState(localStorage.getItem('id'))

    const fetchPet = () => {
        PetModel.one(props.match.params.id).then((petData) => {
            console.log(petData.pet)
            setName(petData.pet.name)
            setBirthdate(petData.pet.birthdate)
        })
    }

    useEffect(() => { fetchPet() }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        PetModel.update({
            name,
            birthdate
        }, petId).then(data => {
            props.history.push('/allpets')
        })
    }

    //need a function for the delete button 
    const handleDelete = (e) => {
        e.preventDefault()
        PetModel.delete(petId).then(data => {
            props.history.push('/allpets')
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
                <button type="submit">Update Pet</button>
                <form onSubmit={handleDelete}><button type="submit">Delete Pet</button></form>
            </form>
        </div>
    )
}



export default EditPet