import React, { useState, useEffect } from 'react'
import PostModel from '../models/post'

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
        <div>
            <h1>Edit Post</h1>
            <img src={imgUrl} alt="This is your post image" />
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        onChange={(e) => { setImgUrl(e.target.value) }}
                        type="text"
                        name="imgUrl"
                        value={imgUrl}
                    />
                    <textarea
                        onChange={(e) => { setContent(e.target.value) }}
                        rows="5"
                        cols="40"
                        type="text"
                        id="content"
                        name="content"
                        value={content}
                    />
                </div>
                <button type="submit">Save Changes</button>
            </form>
            <form onSubmit={handleDelete}><button type="submit">Delete Post</button></form>
        </div>
    )
}

export default EditPost
