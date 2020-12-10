import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ImageModel from '../models/images'
import RelationshipModel from '../models/relationship'
import '../css/allphotos.css'

const AllPhotos = (props) => {
  const [images, setImages] = useState([])
  const [userId] = useState(localStorage.getItem("id"));
  const [userName, setUserName] = useState();


  const fetchUser = () => {
    RelationshipModel.one(userId).then((user) => {
      setImages(user.user.images)
      setUserName(`${user.user.firstName} ${user.user.lastName}`);
    })
  }


  const handleProfilePic = (e, userId, imgUrl) => {
    e.preventDefault()
    ImageModel.updateProfilePic({
      imgUrl: imgUrl
    }, userId).then(data => {
      props.history.push('/profile')
    })
  }

  const handleDelete = (e, id) => {
    e.preventDefault()
    ImageModel.delete(id).then(data => {
      props.history.push('/profile')
    })
  }

  useEffect(() => { fetchUser() }, [])

  const altTag = `${userName} personal image`
  const allImages = images.map((image, index) => (
    <div className="aPhotos-card" key={index}>
      <img src={image.imgUrl} alt={altTag} className="aPhotos-image" id={image.id} />
      <div className="aPhotos-buttonbar">
        <div><form onSubmit={(e) => handleProfilePic(e, userId, image.imgUrl)}><button type="submit" className="aPhotos-cbutton">👤</button></form></div>
        <div><form onSubmit={(e) => handleDelete(e, image.id)}><button className="aPhotos-cbutton" type="submit">🗑️</button></form></div>
      </div>
    </div>
  ))

  return (

    <div className="aPhotos-body">
      <h1 className="aPhotos-heading">Your Photos</h1>
      <button className="aPhotos-button"><Link className="aPhotos-link" to={'/uploadphotos'}>Upload Photos</Link></button>
      <div className="aPhotos-container">
        {allImages}
      </div>
    </div>
  )
}

export default AllPhotos
