import React, {useState, useEffect} from 'react'
import ImageModel from '../models/images'
import ImageContainer from '../components/ImageContainer'
import PostBar from '../components/PostBar'
import '../css/home.css'

const Home = () => {
  const [images,setImages] = useState([])

  const fetchData=() => {
    ImageModel.all().then(data=>{
    
      setImages(data.images)
    })
  }

  useEffect(()=>{fetchData()})

  return (
    <div>
      <h1>Welcome all Pet Owners</h1>
      <ImageContainer images={images} class="home-preview-img"/>
      <PostBar />
    </div>
  );
}

export default Home;
