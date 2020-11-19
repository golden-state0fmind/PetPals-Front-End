import React, { useState } from 'react'
import axios from 'axios'

const ImageUploadBar = (props) => {
    const [uploadedImage, setuploadedImage] = useState()

    const uploadImage = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('file', uploadedImage)
        formData.append('upload_preset', 'cloudName')
        axios.post('https://api.cloudinary.com/v1_1/antonio2020/image/upload', formData)
            .then((res) => {
                let imgUrl = [res.data.url]
                props.setImgUrl(imgUrl[0])
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <input type="file" onChange={(event) => {
                setuploadedImage(event.target.files[0], 'file')
            }} />
            <button onClick={uploadImage} >upload</button>
        </div>
    )
}


export default ImageUploadBar