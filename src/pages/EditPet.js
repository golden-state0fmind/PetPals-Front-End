import React, { useState, useEffect } from 'react'
import PetModel from '../models/pet'
import '../css/editPet.css'

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
        <div className="ep-body">
            <h1 className="ep-heading">Edit Pet</h1>
            <form className="ep-form" onSubmit={handleSubmit}>
            <div className="input-wrapper">
                    <label className="ep-label" htmlFor="name">Name:</label><br/>
                    <input
                        className="ep-input"
                        onChange={(e) => { setName(e.target.value) }}
                        rows="5"
                        cols="40"
                        type="text"
                        id="name"
                        name="name"
                        placeholder="(e.g. George)"
                        value={name}
                    /><br />
                    <label className="ep-label" htmlFor="birthdate">Birthdate:</label><br/>
                    <input
                        className="ep-input"
                        onChange={(e) => { setBirthdate(e.target.value) }}
                        rows="5"
                        cols="40"
                        type="date"
                        id="birthdate"
                        name="birthdate"
                        value={birthdate}
                    /><br /></div>
                <div className="ep-button-wrapper">
                    <button className="ep-button" type="submit">✅</button>
                    <form onSubmit={handleDelete}><button className="ep-button" type="submit">🗑️</button></form>
                </div>
            </form>
        </div>
    )
}



export default EditPet