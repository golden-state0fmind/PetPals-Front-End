import React from 'react';
import PostCard from './PostCard'

const PostContainer = (props) => {
    return (
        <div>
            <PostCard posts={props.posts}/>
        </div>
    );
}

export default PostContainer;
