import React, {useState, useEffect} from 'react'
import ImageModel from '../models/images'
import ImageContainer from '../components/ImageContainer'
import PostBar from '../components/PostBar'
import PostContainer from '../components/PostContainer'
import {Link} from 'react-router-dom'
import '../css/home.css'
import PostModel from '../models/post'

const Home = (props) => {
  const [images,setImages] = useState([])
  const [posts, setPosts] = useState([])
  
  const fetchImages=() => {
    ImageModel.all().then((imgData)=>{
      
      setImages(imgData.images)
    })
  }
  
  const fetchPosts = () =>{
    PostModel.all().then((postData)=>{
      setPosts(postData.posts)
    })
  }


  useEffect( () => { fetchImages() },[])
  useEffect( () => { fetchPosts() } ,[])


  return (
    <div>
      <h1>Welcome all Pet Owners</h1>
      <ImageContainer images={images} imgClass="home-preview-img" divClass="home-preview-container"/>
      <Link to={'/uploadphotos'}><button>Upload Photos</button></Link>
      <PostBar />
      {posts.length ?  <PostContainer posts={posts}/> : "Loading!"}
    
    </div>
  );
}

export default Home;
