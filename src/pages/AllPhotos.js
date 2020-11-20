import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ImageModel from '../models/images'
import '../css/allphotos.css'

const AllPhotos = () => {
  const [images, setImages] = useState([])

  const fetchImages = () => {
    ImageModel.all().then((imgData) => {
      setImages(imgData.images)
    })
  }


  const handleProfilePic = (e) => {
    // e.preventDefault()
  }

  const handleDelete = (e, id) => {
    e.preventDefault()
    console.log("ARE WE MAKING IT HERE?!", id)
    // PostModel.delete(postId).then(data => {
    //   props.history.push('/')
    // })
  }

  useEffect(() => { fetchImages() }, [])

  const allImages = images.map((image, index) => (
    <div>
      <img src={image.imageUrl} alt="User personal images" key={index} className='all-image' id={image.id} />
      <form onSubmit={handleProfilePic}> <button>Make Profile pic</button></form>

      <form onSubmit={(e)=> handleDelete(e, image.id)}>
        <input type="hidden" name='imgId' value={image.id} />
        <button type="submit">Delete</button></form>
    </div>
  ))

  return (
    <div>
      {allImages}
    </div>
  )
}

export default AllPhotos
