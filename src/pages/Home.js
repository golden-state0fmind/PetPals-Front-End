import React, { useState, useEffect } from "react";
import Images from "../components/Images";
import PostBar from "../components/PostBar";
import PostContainer from "../components/PostContainer";
import { Link } from "react-router-dom";
import "../css/home.css";
import PostModel from "../models/post";
import RelationshipModel from "../models/relationship";
import { Container, Row, Col } from "react-bootstrap";
import ImageModel from "../models/images"

const Home = (props) => {
  const [images, setImages] = useState([]);
  const [posts, setPosts] = useState([]);

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

  const fetchPosts = () => {
    PostModel.all().then((postData) => {
      setPosts(postData.posts);
    });
  };

  useEffect( () => { fetchImages() },[])
  useEffect(() => {
    fetchPosts();
  }, []);


  return (
    <Container>
      <h1 className="h-heading">Welcome all Pet Owners</h1>
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
        <h1 className="h-post-heading">Take a look at some posts:</h1>
          {posts.length ? <PostContainer posts={posts} /> : "Loading!"}
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
