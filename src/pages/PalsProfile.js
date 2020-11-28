import React, {useState, useEffect} from 'react';
import RelationshipModel from '../models/relationship'
import Images from '../components/Images'
import PetCardContainer from "../components/PetCardContainer";
import PostBar from "../components/PostBar";
import PostContainer from "../components/PostContainer";
import { Container, Row, Col } from "react-bootstrap";
import {Link} from 'react-router-dom'



const PalsProfile = (props) => {
    const [images, setImages] = useState([])
    const [userName, setUserName] = useState()
    const [currentUserId] = (localStorage.getItem('id'))
    const [palsId] = useState(props.match.params.id)
    const [pets, setPets] = useState([])
    const [posts, setPosts] = useState([]);

    console.log(currentUserId)
  

    const fetchUsers = () =>{
        console.log("hello")
        RelationshipModel.one(palsId).then(user => {
            setPosts(user.user.posts);
            console.log(user)
            setUserName(user.user.firstName)
            for (let i = 0; i < 4; i++) {
              if(user.user.images.length>=1){
                setImages((oldArray) => [...oldArray, user.user.images[i]]);

              }
                if(user.user.pets>=1){
                    setPets((oldArray) => [...oldArray, user.user.pets[i]]);
                }
              }

        })
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      console.log('Add a friend')
      let userOne;
      let userTwo;
      if(currentUserId < palsId){
        userOne = currentUserId
        userTwo = palsId
      }else{
        userOne = palsId
        userTwo = currentUserId
      }
      console.log('userOne',userOne)
      console.log('userOTwo',userTwo)

      RelationshipModel.create({
        userOneId: userOne,
        userTwoId: userTwo,
        status: 0,
        actionUserId : currentUserId
      })
      .then(data => {
          props.history.push('/')
      })
  }
    useEffect(()=>{fetchUsers()},[])
    return (
        <>

            <Container fluid>
      <h1> {userName}'s Profile </h1>
      <Row>
        <Col >
          <Images
            imgClass="profile-preview-img"
            divClass="profile-preview-container"
            images={images}
          />     
          <form onSubmit={handleSubmit}>

                 <button>Add friend</button>
          </form>
        </Col>
        <Col className="profile-header">
          <PetCardContainer pets={pets} />
        </Col>
      </Row>
      {/* <button>
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
      </Link> */}
      <PostBar />
      {posts.length ? <PostContainer posts={posts} /> : "Loading!"}
    </Container>
        </>
    );
}

export default PalsProfile;
