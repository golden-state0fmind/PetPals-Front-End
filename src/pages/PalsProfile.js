import React, { useState, useEffect } from 'react';
import RelationshipModel from '../models/relationship'
import Images from '../components/Images'
import PetCardContainer from "../components/PetCardContainer";
import PostBar from "../components/PostBar";
import PostContainer from "../components/PostContainer";
import ImageModel from "../models/images";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom'
import '../css/profile.css'



const PalsProfile = (props) => {
  const [images, setImages] = useState([])
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [userName, setUserName] = useState()
  const [currentUserId] = (localStorage.getItem('id'))
  const [palsId] = useState(props.match.params.id)
  const [pets, setPets] = useState([])
  const [posts, setPosts] = useState([]);
  const [profilePic, setProfilePic] = useState("")

  console.log(currentUserId)


  const fetchUsers = () => {
    console.log("hello")
    RelationshipModel.one(palsId).then(user => {
      setPosts(user.user.posts);
      console.log(user)
      setFirstName(user.user.firstName)
      setLastName(user.user.lastName)
      setProfilePic(user.user.imgUrl)

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

  // const fetchImages = () => {
  //   ImageModel.limit().then((imgData) => {
  //     setImages(imgData.images)
  //   })
  // }

  // useEffect(() => { fetchImages() }, [])


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Add a friend')
    let userOne;
    let userTwo;
    if (currentUserId < palsId) {
      userOne = currentUserId
      userTwo = palsId
    } else {
      userOne = palsId
      userTwo = currentUserId
    }
    console.log('userOne', userOne)
    console.log('userOTwo', userTwo)

    RelationshipModel.create({
      userOneId: userOne,
      userTwoId: userTwo,
      status: 0,
      actionUserId: currentUserId
    })
      .then(data => {
        props.history.push('/')
      })
  }
  useEffect(() => { fetchUsers() }, [])
  return (
    <div className="p-body">
      <div className="nameDisplay"><h1>{firstName} {lastName}</h1></div>
      <div className="profilePicContainer">
        {profilePic !== null ?
          <img className="profilePic" src={profilePic} alt="Profile Picture" />
          : <><div className="addProfilePic"><Link className="addProfilePicText" to="/allphotos">Add a Profile Pic from your Photos</Link></div></>}
      </div>
      <div><form onSubmit={handleSubmit} className="addFriend-container"><button className="addFriend-button">Add friend</button></form></div>
      <PostBar />

      <Container fluid>
        <Row className="img-wrapper">
          <Col sm={4} className="img-container">
            <div className="content-container-heading"><h4 className="content-text">Photos</h4></div>
            <Images imgClass="profile-preview-img" divClass="profile-preview-container" images={images} userInfo={userName} type={"Image"} />
            <div className="content-link-container">
              <Link className="content-link" to="/allphotos">Open Photo Album</Link><br />
              <Link className="content-link" to={"/uploadphotos"}>Upload Photos</Link>
            </div>
          </Col>

          <Col sm={4} className="img-container">
            <div className="content-container-heading"><h4 className="content-text">Pets</h4></div>
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
}

export default PalsProfile;
