import React from 'react';
import PostCard from './PostCard'

const PostContainer = (props) => {

    return (
        <div>
            <PostCard user={props.user} posts={props.posts}/>
        </div>
    );
}

export default PostContainer;
