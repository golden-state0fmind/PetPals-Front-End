import React, { useState } from 'react'
import axios from 'axios'
import '../css/imageUploadBar.css'

const ImageUploadBar = (props) => {
    const [uploadedImage, setuploadedImage] = useState()

    const uploadImage = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('file', uploadedImage)
        formData.append('upload_preset', 'cloudName')
        axios.post('https://api.cloudinary.com/v1_1/petpals/image/upload', formData)
            .then((res) => {
                let imgUrl = [res.data.url]
                props.setImgUrl(imgUrl[0])
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <input className="iub-input" type="file" onChange={(event) => {
                setuploadedImage(event.target.files[0], 'file')
            }} />
            <button className="iub-button" onClick={uploadImage} >click to upload</button>
        </div>
    )
}


export default ImageUploadBar