import React from 'react';
import { Link } from 'react-router-dom'
import '../css/postCard.css'


const PostCard = (props) => {
    const altTag=`${props.user}'s post photo.` //this might not work on the home page, check your props
    const userId = parseInt(localStorage.getItem('id'))
    const posts = props.posts.map((post, index) => (
        <div key={index} className="post-container">
            {post.imgUrl !== "" ? <img className="post-img" src={post.imgUrl} alt={altTag} /> : ""}
            
            <p>{post.content} </p>
            <p>{post.createdAt}</p>
            <div className="button-wrapper">
            <button><Link to={`/post/${post.id}/show`}>View Post</Link></button>
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
