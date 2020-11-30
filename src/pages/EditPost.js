import React, { useState, useEffect } from 'react'
import PostModel from '../models/post'
import '../css/editPost.css'

const EditPost = (props) => {
    const [postId] = useState(props.match.params.id)
    const [content, setContent] = useState('')
    const [imgUrl, setImgUrl] = useState('')
    const [userId, setUserId] = useState(localStorage.getItem('id'))

    const fetchPost = () => {
        PostModel.onePost(postId).then((postData) => {
            setContent(postData.post.content)
            setImgUrl(postData.post.imgUrl)
            setUserId(postData.post.userId)
        })
    }

    useEffect(() => { fetchPost() }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        PostModel.update({
            imgUrl,
            content,
            userId,
        }, postId).then(data => {
            props.history.push('/profile')
        })
    }

    //need a function for the delete button 
    const handleDelete = (e) => {
        e.preventDefault()
        PostModel.delete(postId).then(data => {
            props.history.push('/profile')
        })
    }

    return (
        <div className="ePost-body">
            <h1 className="ePost-heading">Edit Post</h1>
            {imgUrl !== "" ? <img className="ec-image" src={imgUrl} alt="This is your post image" /> : ""}
            <form className="ePost-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="ePost-label">Image URL:</label>
                    <input
                        className="ePost-input"
                        onChange={(e) => { setImgUrl(e.target.value) }}
                        type="text"
                        name="imgUrl"
                        placeholder="insert image url..."
                        value={imgUrl}
                    /><br />
                </div>
                <div className="form-group">
                    <textarea
                        className="ePost-input"
                        onChange={(e) => { setContent(e.target.value) }}
                        rows="5"
                        cols="40"
                        type="text"
                        id="content"
                        name="content"
                        value={content}
                    />
                </div>
                <button className="ePost-save-button" type="submit">Save Changes</button>
            </form>
            <div className="ec-delete-container">
            <form onSubmit={handleDelete}><button className="ePost-delete-button" type="submit">Delete Post</button></form>
            </div>
        </div>
    )
}

export default EditPost
