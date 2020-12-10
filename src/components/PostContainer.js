import React from 'react';
import PostCard from './PostCard'
import '../css/profile.css'

const PostContainer = (props) => {

    return (
        <div className="posts-wrapper">
        <div className="post-header"><h4 className="content-text">Posts</h4></div>
            <PostCard user={props.user} posts={props.posts}/>
        </div>
    );
}

export default PostContainer;
