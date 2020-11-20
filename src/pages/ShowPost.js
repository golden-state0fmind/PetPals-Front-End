import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PostModel from '../models/post'
import CommentContainer from '../components/CommentContainer'
import CommentModel from '../models/comment'

const ShowPost = (props) => {
    const [postUserId, setPostUserId] = useState()
    const [postId, setPostId] = useState()
    const [imgUrl, setImgUrl] = useState()
    const [content, setContent] = useState()
    const [createdAt, setCreatedAt] = useState()
    const [updatedAt, setUpdatedAt] = useState()
    const [comments, setComments] = useState([])

    const userId = localStorage.getItem('id')

    const fetchPost = () => {
        PostModel.onePost(props.match.params.id).then(onePost => {
            setPostUserId(onePost.post.userId)
            setPostId(onePost.post.id)
            setImgUrl(onePost.post.imgUrl)
            setContent(onePost.post.content)
            setCreatedAt(onePost.post.createdAt)
            setUpdatedAt(onePost.post.updatedAt)
        })
    }

    const fetchComments = () => {
        CommentModel.all(props.match.params.id).then(comments => {
            setComments(comments.comments)
        })
    }
    
    useEffect(() => { fetchPost() }, [])
    useEffect(() => {fetchComments()}, [])
    
    return (
        <div>
            <h3><Link to={`/post/${postId}/show`}>USER ID: {postUserId}</Link></h3>
            <h3>POST ID: {postId}</h3>
            <img src={imgUrl} alt="" />
            <p> {content} </p>
            <p>{createdAt}</p>
            <p>{updatedAt}</p>
            <button><Link to={`/addcomment/${postId}`}>Add Comment</Link></button>
            {postUserId == userId ?

                <button><Link to={`/post/${postId}/edit`}>Edit Post</Link></button> : ""}
            {comments.length ? <CommentContainer postId={postId} comments={comments} /> : "Loading!"}
        </div>
    )
}

export default ShowPost
