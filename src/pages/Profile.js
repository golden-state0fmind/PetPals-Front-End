import React, {useState, useEffect} from 'react'
import ImageContainer from '../components/ImageContainer'
import PostBar from '../components/PostBar'
import PostContainer from '../components/PostContainer'
import PostModel from '../models/post'

const Profile = () => {
    const [user, setUser] = useState(localStorage.getItem('id'))
    const [posts, setPosts] = useState([])

    const fetchUsersPosts = () => {
        PostModel.oneUser(user).then((postData) => {
            setPosts(postData.posts)
        })
    }

    useEffect( () => { fetchUsersPosts() } ,[])

    return (
        <div>
            <h1>Profile</h1>
            <PostBar />
            {/* <ImageContainer class="profile-preview-img" />
            <ImageContainer class="profile-preview-img" /> */}
            {posts.length ?  <PostContainer posts={posts}/> : "Loading!"}
        </div>
    )
}

export default Profile