import React from 'react';
import { Link } from 'react-router-dom'
import '../css/postCard.css'


const PostCard = (props) => {
    const altTag = `${props.user}'s post photo.` 
    const userId = parseInt(localStorage.getItem('id'))
    const posts = props.posts.map((post, index) => (
        <div key={index} className="post-container">
            {post.imgUrl !== "" ? <img className="post-img" src={post.imgUrl} alt={altTag} /> : ""}
            <div className="post-details">
                <p className="post-content">{post.content} </p>
            </div>
            <div className="post-button-wrapper">
                <div className="post-button"><Link to={`/post/${post.id}/show`}>👀</Link></div>
                <div className="post-button"><Link to={`/addcomment/${post.id}`}>💬</Link></div>
                {post.userId === userId ?
                    <><div className="post-button"><Link to={`/post/${post.id}/edit`}>✍️</Link></div></> : ""}
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
