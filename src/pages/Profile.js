import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Images from '../components/Images'
import PostBar from '../components/PostBar'
import PostContainer from '../components/PostContainer'
import '../css/profile.css'
import RelationshipModel from '../models/relationship'

const Profile = () => {
  const [userId] = useState(localStorage.getItem('id'))
  const [profilePic, setProfilePic] = useState('')
  const [posts, setPosts] = useState([])
  const [images, setImages] = useState([])
  const [pets, setPets] = useState([])
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [birthdate, setBirthDate] = useState()

  const fetchUser = () => {
    RelationshipModel.one(userId).then(user => {
      setPosts(user.user.posts)
      setImages(user.user.images)
      setPets(user.user.pets)
      setProfilePic(user.user.imgUrl)
      setFirstName(user.user.firstName)
      setLastName(user.user.lastName)
      setBirthDate(user.user.birthdate)
      console.log(user.user)
    })
  }

  useEffect(() => { fetchUser() }, [])
  return (
    <div className="Profile">
      <div className="nameDisplay"><h1>{firstName} {lastName}</h1></div>
          <div className="profilePicContainer">
            {profilePic !== "" ?
              <img className="profilePic" src={profilePic} alt="Profile Picture" />
              : <><div className="addProfilePic"><Link className="addProfilePicText" to="/allphotos">Add a Profile Pic from your Photos</Link></div></>}
          </div>
        <div className="buttons">
          <ul>
            <li><button><Link to="/allphotos">See All Photos</Link></button></li>
            <li><button><Link to="/allpets">See All Pets</Link></button></li>
            <li><button><Link to="/addpet">Add A Pet</Link></button></li>
            <li><button><Link to={'/uploadphotos'}>Upload Photos</Link></button></li>
          </ul>
        
      </div>
      <Images imgClass="profile-preview-img" divClass='profile-preview-container' images={pets} />
      <Images imgClass="profile-preview-img" divClass='profile-preview-container' images={images} />
      <PostBar />
      {posts.length ? <PostContainer posts={posts} /> : "Loading!"}
    </div>
  )
}

export default Profile