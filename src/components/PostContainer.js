import React from 'react';
import PostCard from './PostCard'
import '../css/profile.css'

const PostContainer = (props) => {

    return (
        <div className="posts-wrapper">
            <PostCard user={props.user} posts={props.posts}/>
        </div>
    );
}

export default PostContainer;
