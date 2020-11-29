import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Images from "../components/Images";
import PostContainer from "../components/PostContainer";
import PostModel from "../models/post";
import PetModel from '../models/pet'
import ImageModel from "../models/images"
import "../css/home.css";

const Home = (props) => {
  const [images, setImages] = useState([]);
  const [posts, setPosts] = useState([]);
  const [pets, setPets] = useState([])

  const fetchImages=() => {
    ImageModel.all().then((imgData)=>{
      const imageDeck = imgData.images
      for (let i = 0; i < imageDeck.length; i++) {                                       //SHUFFLES THE ARRAY
        let j = Math.floor(Math.random() * imageDeck.length);  
        let temp = imageDeck[i]; 
        imageDeck[i] = imageDeck[j];
        imageDeck[j] = temp;   
      }
      setImages(imageDeck)
    })
  }

  const fetchPets = () => {
    PetModel.all().then((petData) => {
      const petDeck = petData.pets
      for (let i = 0; i < petDeck.length; i++) {                                       //SHUFFLES THE ARRAY
        let j = Math.floor(Math.random() * petDeck.length);  
        let temp = petDeck[i]; 
        petDeck[i] = petDeck[j];
        petDeck[j] = temp;   
      }
        setPets(petDeck)
    })
}

  const fetchPosts = () => {
    PostModel.all().then((postData) => {
      setPosts(postData.posts);
    });
  };

  useEffect( () => { fetchImages() },[])
  useEffect(()=> {fetchPets()},[])
  useEffect(() => {
    fetchPosts();
  }, []);


  return (
    <Container>
      <h1 className="h-heading">Welcome all Pet Owners</h1>
      <p className="h-post-heading">Meet some Pets!</p>
      <Row>
        <Col className="img-container">
          <Images
            images={pets}
            imgClass="home-preview-img"
            divClass="home-preview-container"
          />
        </Col>
      </Row>
        <p className="h-post-heading">Photo Gallery</p>
      <Row>
        <Col className="img-container">
          <Images
            images={images}
            imgClass="home-preview-img"
            divClass="home-preview-container"
          />
        </Col>
      </Row>
      <Row>
        <Col>
        <p className="h-post-heading">Take a look at some posts:</p>
          {posts.length ? <PostContainer posts={posts} /> : "Loading!"}
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
