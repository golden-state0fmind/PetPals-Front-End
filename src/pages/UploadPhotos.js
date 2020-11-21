
import React, { useState, useEffect } from 'react'
import ImageModel from '../models/images'
import ImageUploadBar from '../components/ImageUploadBar'

const UploadPhotos = (props) => {
    const [userId, setUserId] = useState(localStorage.getItem('id'))
    const [imageUrl, setImageUrl] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        ImageModel.create({
            imageUrl,
            userId,
        }).then(data => {
            props.history.push('/')
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <ImageUploadBar setImgUrl={setImageUrl}/>
                <button type="submit">Save</button>
            </form>
        </div>
    )
}

export default UploadPhotos
