
import React, { useState, useEffect } from 'react'
import ImageModel from '../models/images'
import ImageUploadBar from '../components/ImageUploadBar'

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
        <div>
        <h1>Upload A Photo</h1>
            <form onSubmit={handleSubmit}>
                <ImageUploadBar setImgUrl={setImgUrl}/>
                <button type="submit">Save</button>
            </form>
        </div>
    )
}

export default UploadPhotos
