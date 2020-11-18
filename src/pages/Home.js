import React, {useState, useEffect} from 'react';
import ImageContainer from '../components/ImageContainer'
import ImageModel from '../models/images';

const Home = () => {
  const [images,setImages] = useState([])

  const fetchData=() => {
    ImageModel.all().then(data=>{
      console.log(data)
    })
  }

  useEffect(()=>{fetchData()})

  return (
    <div>
      <h1>Welcome all Pet Owners</h1>
      <ImageContainer />
    </div>
  );
}

export default Home;
