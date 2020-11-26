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
    const [userId] = useState(props.match.params.id)
    const [pets, setPets] = useState([])
    const [posts, setPosts] = useState([]);


    const fetchUsers = () =>{
        console.log("hello")
        RelationshipModel.one(userId).then(user => {
            setPosts(user.user.posts);
            for (let i = 0; i < 4; i++) {
                setImages((oldArray) => [...oldArray, user.user.images[i]]);
                if(user.user.pets>=1){
                    setPets((oldArray) => [...oldArray, user.user.pets[i]]);
                }
              }
              
            // setImages(user.user.images)
            // setUser(user.user)
        })
    }
    useEffect(()=>{fetchUsers()},[])
    return (
        <div> 
            {/* <Images imgClass="profile-preview-img" divClass='profile-preview-container' images={images} /> */}

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
        </div>
    );
}

export default PalsProfile;
