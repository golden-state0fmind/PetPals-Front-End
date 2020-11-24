import React, {useState, useEffect} from 'react';
import RelationshipModel from '../models/relationship'
import Images from '../components/Images'

const PalsProfile = (props) => {
    console.log(props.match.params.id)
    const [user, setUser] = useState()
    const [images, setImages] = useState([])

    const fetchUsers = () =>{
        RelationshipModel.one(props.match.params.id).then(user => {
            setImages(user.user.images)
            setUser(user.user)
        })
    }
    useEffect(()=>{fetchUsers()},[])
    console.log(images)
    return (
        <div>
            
            <Images imgClass="profile-preview-img" divClass='profile-preview-container' images={images} />
        </div>
    );
}

export default PalsProfile;
