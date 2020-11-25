import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Images from "../components/Images";
import PostBar from "../components/PostBar";
import PostContainer from "../components/PostContainer";
import "../css/profile.css";
import RelationshipModel from "../models/relationship";
import PetCardContainer from "../components/PetCardContainer";
import { Container, Row, Col } from "react-bootstrap";

const Profile = () => {
  const [userId] = useState(localStorage.getItem("id"));
  const [posts, setPosts] = useState([]);
  const [images, setImages] = useState([]);
  const [pets, setPets] = useState([]);

  const fetchUser = () => {
    RelationshipModel.one(userId).then((user) => {
      setPosts(user.user.posts);
      for (let i = 0; i < 4; i++) {
        setImages((oldArray) => [...oldArray, user.user.images[i]]);
        setPets((oldArray) => [...oldArray, user.user.pets[i]]);
      }
      // setImages(user.user.images)
      console.log(user.user);
    });
  };

  useEffect(() => {
    fetchUser();
  }, []);
  console.log(images);
  return (
    <Container>
      <h1>Profile</h1>
      <Row>
        <Col >
          <Images
            imgClass="profile-preview-img"
            divClass="profile-preview-container"
            images={images}
          />
        </Col>
        <Col lassName="profile-header">
          <PetCardContainer pets={pets} />
        </Col>
      </Row>
      <button>
        {" "}
        <Link to="/allphotos">See All</Link>{" "}
      </button>
      <button>
        {" "}
        <Link to="/allpets">See All Pets</Link>{" "}
      </button>
      <button>
        {" "}
        <Link to="/addpet">Add A Pet</Link>{" "}
      </button>
      <Link to={"/uploadphotos"}>
        <button>Upload Photos</button>
      </Link>
      <PostBar />
      {posts.length ? <PostContainer posts={posts} /> : "Loading!"}
    </Container>
  );
};

export default Profile;
