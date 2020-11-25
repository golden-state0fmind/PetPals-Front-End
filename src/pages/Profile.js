import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Images from '../components/Images'
import PostBar from '../components/PostBar'
import PostContainer from '../components/PostContainer'
import '../css/profile.css'
import RelationshipModel from '../models/relationship'

const Profile = () => {
    const [userId] = useState(localStorage.getItem('id'))
    const [posts, setPosts] = useState([])
    const [images, setImages] = useState([])

  const fetchUser = () =>{
    RelationshipModel.one(userId).then(user =>{
      setPosts(user.user.posts)
      for(let i=0; i<4; i++){
        setImages(oldArray => [...oldArray,user.user.images[i]])
      }
      // setImages(user.user.images)
      console.log(user.user)
    })
  }

    useEffect(() => { fetchUser() }, [])
    console.log(images)
    return (
        <div>
            <h1>Profile</h1>
            <Images imgClass="profile-preview-img" divClass='profile-preview-container' images={images} />
            <button> <Link to="/allphotos">See All</Link> </button>
            <button> <Link to="/allpets">See All Pets</Link> </button>
            <button> <Link to="/addpet">Add A Pet</Link> </button>
            <Link to={'/uploadphotos'}><button>Upload Photos</button></Link>
            <PostBar />
            {posts.length ? <PostContainer posts={posts} /> : "Loading!"}
        </div>
    )
}

export default Profile