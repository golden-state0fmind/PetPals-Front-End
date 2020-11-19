import React from 'react';
import {Link} from 'react-router-dom'

const PostCard = (props) => {
    const posts = props.posts.map((post, index)=>(
        <div>
        <h3>{post.userId}</h3> 
        <p> {post.content} </p>
        <img src={post.imgUrl} alt=""/> 
        <p>{post.createAt}</p>
        <button> <Link to={'/addcomment'}>Add Comment</Link> </button>
      </div>
    ))
    return (
        <>
        {posts}
        </>
    );
}

export default PostCard;
