import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import ImageContainer from '../components/ImageContainer'
import PostBar from '../components/PostBar'
import PostContainer from '../components/PostContainer'
import ImageModel from '../models/images'
import PostModel from '../models/post'
import '../css/profile.css'

const Profile = () => {
    const [user, setUser] = useState(localStorage.getItem('id'))
    const [posts, setPosts] = useState([])
    const [images, setImages] = useState([])

    const fetchUsersPosts = () => {
        PostModel.oneUser(user).then((postData) => {
            setPosts(postData.posts)
        })
    }

    const fetchImages=() => {
        ImageModel.all().then((imgData)=>{
          
          setImages(imgData.images)
        })
      }
    useEffect( () => { fetchUsersPosts() } ,[])
    useEffect(()=>{fetchImages()},[])

    return (
        <div>
            <h1>Profile</h1>
            <ImageContainer imgClass="profile-preview-img" divClass='profile-preview-container' images={images}/>
            <button> <Link to="/allphotos">See All</Link> </button>
            <button> <Link to="/allpets">See All Pets</Link> </button>
            <button> <Link to="/addpet">Add A Pet</Link> </button>
            {/* <ImageContainer imgClass="profile-preview-img" divClass='profile-preview-container' /> */}
            <PostBar />
            {posts.length ?  <PostContainer posts={posts}/> : "Loading!"}
        </div>
    )
}

export default Profile