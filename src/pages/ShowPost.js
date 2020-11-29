import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PostModel from '../models/post'
import CommentContainer from '../components/CommentContainer'
import CommentModel from '../models/comment'
import '../css/showPost.css'

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
    useEffect(() => { fetchComments() }, [])
    const altText = `Post number ${postId}.`

    return (
        <div className="sp-body">
            <div className="sp-post-body">
                <div className="sp-image-container">{imgUrl !== "" ? <img className="sp-image" src={imgUrl} alt={altText} /> : ""}</div>
                <p className="sp-content">{content}</p>
                <div className="sp-button-wrapper">
                    <button className="sp-button"><Link className="sp-link" to={`/addcomment/${postId}`}>💬</Link></button>
                    {postUserId == userId ? <button className="sp-button"><Link className="sp-link" to={`/post/${postId}/edit`}>✍️</Link></button> : ""}
                    <h4 className="font">Comments:</h4>
                    {comments.length ? <CommentContainer postId={postId} comments={comments} /> : ""}
                </div>
            </div>
        </div>
    )
}

export default ShowPost
