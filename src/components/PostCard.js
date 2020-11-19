import React from 'react';

const PostCard = (props) => {
    const posts = props.posts.map((post, index)=>(
        <div>
        <h3>{post.userId}</h3> 
        <p> {post.content} </p>
        <img src={post.imgUrl} alt=""/> 
        <p>{post.createAt}</p>
      </div>
    ))
    return (
        <>
        {posts}
        </>
    );
}

export default PostCard;
