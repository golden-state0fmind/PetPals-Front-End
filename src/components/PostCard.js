import React from 'react';
import { Link } from 'react-router-dom'

const PostCard = (props) => {
    console.log ("this is props", props.posts)
    const userId = localStorage.getItem('id')
    const posts = props.posts.map((post, index) => (
        <div>
            <h3>USER ID: {post.userId}</h3>
            <h3>POST ID: {post.id}</h3>
            <img src={post.imgUrl} alt="" />
            <p> {post.content} </p>
            <p>{post.createAt}</p>
            <button><Link to={'/addcomment'}>Add Comment</Link></button>
            {post.userId == userId ? 

            <button><Link to={`/post/${post.id}/edit`}>Edit Post</Link></button> : "" }
        </div>
    ))
    return (
        <>
            {posts}
        </>
    );
}

export default PostCard;
