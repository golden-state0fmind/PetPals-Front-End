import React, { useState } from 'react'
import ImageUploadBar from '../components/ImageUploadBar'
import PetModel from '../models/pet'

const AddPet = (props) => {
    const [name, setName] = useState('')
    const [species, setSpecies] = useState('')
    const [birthdate, setBirthdate] = useState('')
    const [userId, setUser] = useState(localStorage.getItem('id'))
    const [imgUrl, setImgUrl] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        PetModel.create({
            name,
            species,
            birthdate,
            imgUrl,
            userId,
        }).then(data => {
            props.history.push('/allpets')
        })
    }

    return (
        <div>
            <h1>Add a Pet</h1>
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
                    <label htmlFor="species">Species:</label>
                    <input
                        onChange={(e) => { setSpecies(e.target.value) }}
                        rows="5"
                        cols="40"
                        type="text"
                        id="species"
                        name="species"
                        placeholder="(e.g. Bat)"
                        value={species}
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
                <p>Upload an Image:</p>
                <ImageUploadBar setImgUrl={setImgUrl} />
                <button type="submit">Add Pet</button>
            </form>
        </div>
    )
}

export default AddPet
