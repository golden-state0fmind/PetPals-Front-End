import React from 'react';
import PostCard from './PostCard'

const PostContainer = (props) => {
    console.log(props)
    return (
        <div>
            <PostCard posts={props.posts}/>
        </div>
    );
}

export default PostContainer;
