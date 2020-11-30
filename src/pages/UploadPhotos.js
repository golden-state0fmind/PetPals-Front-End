
import React, { useState, useEffect } from 'react'
import ImageModel from '../models/images'
import ImageUploadBar from '../components/ImageUploadBar'
import '../css/uploadPhotos.css'

const UploadPhotos = (props) => {
    const [userId] = useState(localStorage.getItem('id'))
    const [imgUrl, setImgUrl] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        ImageModel.create({
            imgUrl,
            userId,
        }).then(data => {
            props.history.push('/allphotos')
        })
    }

    return (
        <div className="up-body">
        <h1 className="up-heading">Upload A Photo</h1>
            <form className="up-form" onSubmit={handleSubmit}>
                <div class="up-bar"><ImageUploadBar setImgUrl={setImgUrl}/></div>
                <button class="up-button" type="submit">Save</button>
            </form>
        </div>
    )
}

export default UploadPhotos
