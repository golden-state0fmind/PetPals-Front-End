import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ImageModel from '../models/images'
import '../css/allphotos.css'

const AllPhotos = (props) => {
  const [images, setImages] = useState([])
  const [currentUserId, setcurrentUserId] = useState(localStorage.getItem('id'))


  const fetchImages = () => {
    ImageModel.all().then((imgData) => {
      setImages(imgData.images)
    })
  }

  const handleProfilePic = (e, userId, imgUrl) => {
    e.preventDefault()
    ImageModel.updateProfilePic({
      imgUrl: imgUrl
    }, userId).then(data => {
      props.history.push('/')
    })
}

//////////////////////////////


const handleDelete = (e, id) => {
  e.preventDefault()
  ImageModel.delete(id).then(data => {
    props.history.push('/profile')
  })
}

useEffect(() => { fetchImages() }, [])

const allImages = images.map((image, index) => (
  <div key={index}>
  {image.userId == currentUserId ?
    <>
      <img src={image.imageUrl} alt="User personal images" className='all-image' id={image.id} />
      <form onSubmit={(e) => handleProfilePic(e, currentUserId, image.imageUrl)}> <button>Make Profile pic</button></form>

      <form onSubmit={(e) => handleDelete(e, image.id)}>
        <button type="submit">Delete</button></form>
    </>
      : ""}
  </div>
))

return (
  <div>
    {allImages}
  </div>
)
}

export default AllPhotos
