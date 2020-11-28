import React from 'react';
import { Link } from 'react-router-dom'
import '../css/postCard.css'

const PostCard = (props) => {
    const userId = parseInt(localStorage.getItem('id'))
    const posts = props.posts.map((post, index) => (
        <div key={index} className="post-container">
            <h3 className="post-title"><Link to={`/post/${post.id}/show`}>{props.user? props.user : ""}</Link></h3>
            <img src={post.imgUrl} alt="" />
            <p> {post.content} </p>
            <p>{post.createdAt}</p>
            <div className="button-wrapper">
            <button><Link to={`/addcomment/${post.id}`}>Add Comment</Link></button>
            {post.userId === userId ? 
            <button><Link to={`/post/${post.id}/edit`}>Edit Post</Link></button> : "" }
            </div>
        </div>
    ))
    return (
        <>
            {posts}
        </>
    );
}

export default PostCard;
