import React, { useState } from 'react'
import ImageUploadBar from '../components/ImageUploadBar'
import PetModel from '../models/pet'
import '../css/addPet.css'

const AddPet = (props) => {
    const [name, setName] = useState('')
    const [species, setSpecies] = useState('')
    const [birthdate, setBirthdate] = useState('')
    const [userId] = useState(localStorage.getItem('id'))
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
        <div className="ap-body">
            <h1 className="ap-heading">Add a Pet</h1>
            <form className="ap-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="ap-label" htmlFor="name">Name: </label>
                    <input
                        className="ap-input"
                        onChange={(e) => { setName(e.target.value) }}
                        rows="5"
                        cols="40"
                        type="text"
                        id="name"
                        name="name"
                        placeholder="(e.g. George)"
                        value={name}
                    />
                    <label className="ap-label" htmlFor="species">Species: </label>
                    <input
                        className="ap-input"
                        onChange={(e) => { setSpecies(e.target.value) }}
                        rows="5"
                        cols="40"
                        type="text"
                        id="species"
                        name="species"
                        placeholder="(e.g. Bat)"
                        value={species}
                    />
                    <label className="ap-label" htmlFor="birthdate">Birthdate: </label>
                    <input
                        className="ap-input"
                        onChange={(e) => { setBirthdate(e.target.value) }}
                        rows="5"
                        cols="40"
                        type="date"
                        id="birthdate"
                        name="birthdate"
                        value={birthdate}
                    />
                </div>
                <p className="ap-label">Upload an Image:</p>
                <ImageUploadBar setImgUrl={setImgUrl} />
                <button className="ap-button" type="submit">Add Pet</button>
            </form>
        </div>
    )
}

export default AddPet
