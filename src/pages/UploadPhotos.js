
import React, { useState, useEffect } from 'react'
import ImageModel from '../models/images'
import ImageUploadBar from '../components/ImageUploadBar'

const UploadPhotos = (props) => {
    const [userId, setUserId] = useState(localStorage.getItem('id'))
    const [imgUrl, setImgUrl] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        ImageModel.create({
            imgUrl,
            userId,
        }).then(data => {
            props.history.push('/')
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <ImageUploadBar setImgUrl={setImgUrl}/>
                <button type="submit">Save</button>
            </form>
        </div>
    )
}

export default UploadPhotos
