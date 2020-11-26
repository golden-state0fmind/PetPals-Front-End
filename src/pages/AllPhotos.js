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
      <img src={image.imgUrl} alt="User personal images" className='all-image' id={image.id} />
      <form onSubmit={(e) => handleProfilePic(e, currentUserId, image.imgUrl)}> <button type="submit">Make Profile pic</button></form>

      <form onSubmit={(e) => handleDelete(e, image.id)}>
        <button type="submit">Delete</button></form>
    </>
      : ""}
  </div>
))

return (
  <div>
    <h1>Your Photos</h1>
    <Link to={'/uploadphotos'}><button>Upload Photos</button></Link>
    {allImages}
  </div>
)
}

export default AllPhotos
