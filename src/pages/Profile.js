import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Images from "../components/Images";
import PostBar from "../components/PostBar";
import PostContainer from "../components/PostContainer";
// import "../css/profile.css";
import RelationshipModel from "../models/relationship";
import ImageModel from "../models/images";
import PetCardContainer from "../components/PetCardContainer";
import { Container, Row, Col } from "react-bootstrap";
// import PostContainer from "../components/PostContainer";
import Friends from "../components/Friends";

const Profile = () => {
  const [userId] = useState(localStorage.getItem("id"));
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [birthdate, setBirthDate] = useState()
  const [profilePic, setProfilePic] = useState('')
  const [posts, setPosts] = useState([]);
  const [images, setImages] = useState([]);
  const [pets, setPets] = useState([]);
  const [userName, setUserName] = useState(); //duplicate information


  const fetchUser = () => {
    RelationshipModel.one(userId).then((user) => {
      setPosts(user.user.posts)
      setImages(user.user.images)
      setProfilePic(user.user.imgUrl)
      setFirstName(user.user.firstName)
      setLastName(user.user.lastName)
      setBirthDate(user.user.birthdate)

      setPosts(user.user.posts);
      setUserName(`${user.user.firstName} ${user.user.lastName}`);
      for (let i = 0; i < 4; i++) {
        if (user.user.pets.length >= 1) {
          setPets((oldArray) => [...oldArray, user.user.pets[i]]);
        }
      }
      console.log(user.user, userName);
    });
  };


  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <Container fluid>
      <div className="nameDisplay"><h1>{firstName} {lastName}</h1></div>
          <div className="profilePicContainer">
            {profilePic !== "" ?
              <img className="profilePic" src={profilePic} alt="Profile Picture" />
              : <div className="addProfilePic"><Link className="addProfilePicText" to="/allphotos">Add a Profile Pic from your Photos</Link></div>}
          </div>
          <PostBar />



      <Row className="img-wrapper">
        <Col sm={4} className="img-container">

          <Images
            imgClass="profile-preview-img"
            divClass="profile-preview-container"
            images={images}
          />
          <Link to="/allphotos">See All</Link>{" "}
          <Link to={"/uploadphotos"}>Upload Photos</Link>
        </Col>

        <Col sm={4} className="profile-header">
          <PetCardContainer pets={pets} />
          <div className="pet-card-btns-container">
          {/* <Images imgClass="profile-preview-img" divClass="profile-preview-container" images={pets}/> */}
            <Link className="pets-btn" to="/allpets">
              {" "}
              See All Pets{" "}
            </Link>{" "}
            <Link className="pets-btn" to="/addpet">
              {" "}
              Add A Pet{" "}
            </Link>{" "}
          </div>
        </Col>
      </Row>
      
      <Row>
        <Col className="friends-container">
          <Friends />
        </Col>
      </Row>

      {posts.length ? (
        <PostContainer user={userName} posts={posts} />
      ) : (

          "Loading!"
        )}

    </Container>
  );
};

export default Profile;
