import React from 'react';
import PostCard from './PostCard'

const PostContainer = (props) => {

    return (
        <div className="post-wrapper">
            <PostCard user={props.user} posts={props.posts}/>
        </div>
    );
}

export default PostContainer;
