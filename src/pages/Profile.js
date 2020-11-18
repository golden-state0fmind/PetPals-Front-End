import React from 'react'
import ImageContainer from '../components/ImageContainer'

const Profile = () => {
    // One ImageContainer for pets and one for all photots
    return (
        <div>
        <ImageContainer /> 
        <ImageContainer />
        <h1>Profile</h1>
        </div>
    )
}

export default Profile