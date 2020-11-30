import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Images from "../components/Images";
import PostBar from "../components/PostBar";
import PostContainer from "../components/PostContainer";
import "../css/profile.css";
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
  const [profilePic, setProfilePic] = useState("")
  const [posts, setPosts] = useState([]);
  const [images, setImages] = useState([]);
  const [pets, setPets] = useState([]);
  const [userName, setUserName] = useState(); //duplicate information


  const fetchUser = () => {
    RelationshipModel.one(userId).then((user) => {
      setPosts(user.user.posts)
      setProfilePic(user.user.imgUrl)
      setFirstName(user.user.firstName)
      setLastName(user.user.lastName)
      setBirthDate(user.user.birthdate)

      setPosts(user.user.posts);
      setUserName(`${user.user.firstName} ${user.user.lastName}`);

      if (user.user.pets.length > 4) {
        for (let i = 0; i < 4; i++) {
          if (user.user.pets.length >= 1) {
            setPets((oldArray) => [...oldArray, user.user.pets[i]]);
          }
        }
      } else {
        let petDisplay = user.user.pets
        let fillersNeeded = 4 - user.user.pets.length
        let placeholder = { "imgUrl": "https://res.cloudinary.com/petpals/image/upload/v1606603639/bgz6ubtlg5vm1yvkoe9t.png" }
        for (let i = 0; i < fillersNeeded; i++) {
          petDisplay.push(placeholder)
        }
        setPets(petDisplay)
      }

      if (user.user.images.length > 4) {
        for (let i = 0; i < 4; i++) {
          if (user.user.images.length >= 1) {
            setImages((oldArray) => [...oldArray, user.user.images[i]]);
          }
        }
      } else {
        let imageDisplay = user.user.images
        let fillersNeeded = 4 - user.user.images.length
        let placeholder = { "imgUrl": "https://res.cloudinary.com/petpals/image/upload/v1606603639/bgz6ubtlg5vm1yvkoe9t.png" }
        for (let i = 0; i < fillersNeeded; i++) {
          imageDisplay.push(placeholder)
        }
        setImages(imageDisplay)
      }

    })
  }





  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="p-body">
      <div className="nameDisplay"><h1>{firstName} {lastName}</h1></div>
      <div className="profilePicContainer">
        {profilePic !== null ?
          <img className="profilePic" src={profilePic} alt="Profile Picture" />
          : <><div className="addProfilePic"><Link className="addProfilePicText" to="/allphotos">Add a Profile Pic from your Photos</Link></div></>}
      </div>
      <PostBar />

      <Container fluid>
        <Row className="img-wrapper">
          <Col sm={4} className="img-container">
            <h4 className="content-text">Photos</h4>
            <Images imgClass="profile-preview-img" divClass="profile-preview-container" images={images} userInfo={userName} type={"Image"} />
            <div className="content-link-container">
              <Link className="content-link" to="/allphotos">Open Photo Album</Link><br />
              <Link className="content-link" to={"/uploadphotos"}>Upload Photos</Link>
            </div>
          </Col>

          <Col sm={4} className="img-container">
            <h4 className="content-text">Pets</h4>
            <Images imgClass="profile-preview-img" divClass="profile-preview-container" images={pets} userInfo={userName} type={"Pet"} />
            <div className="content-link-container">
              <Link className="content-link" to="/allpets">See All Pets</Link><br />
              <Link className="content-link" to="/addpet">Add A Pet</Link>
            </div>
          </Col>
        </Row>

        {/* <Row>
        <Col className="friends-container">
          <Friends />
        </Col>
      </Row> */}

        {posts.length ? (
          <PostContainer user={userName} posts={posts} />
        ) : (

            "Loading!"
          )}

      </Container>
    </div>
  );
};

export default Profile;
