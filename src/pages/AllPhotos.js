import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ImageModel from '../models/images'
import RelationshipModel from '../models/relationship'
import '../css/allPhotos.css'

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

const altTag=`${userName} personal image`
const allImages = images.map((image, index) => (
  <div key={index}>
      <img src={image.imgUrl} alt={altTag} className='aPhotos-image' id={image.id} />
      <form onSubmit={(e) => handleProfilePic(e, userId, image.imgUrl)}> <button type="submit">Make Profile pic</button></form>
      <form onSubmit={(e) => handleDelete(e, image.id)}>
        <button type="submit">Delete</button></form>
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
