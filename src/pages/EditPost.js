import React, { useState, useEffect } from 'react'
import PostModel from '../models/post'

const EditPost = (props) => {
    const [postId, setPostId] = useState(props.match.params.id)
    const [content, setContent] = useState('')
    const [imgUrl, setImgUrl] = useState('')
    const [userId, setUser] = useState(localStorage.getItem('id'))

    const fetchPost = () => {
        PostModel.onePost(postId).then((postData) => {
            setContent(postData.post.content)
            setImgUrl(postData.post.imgUrl)
            setUser(postData.post.userId)
        })
    }

    useEffect(() => { fetchPost() }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        PostModel.update({
            content,
            userId,
        }, postId).then(data => {
            props.history.push('/')
        })
    }

    //need a function for the delete button 
    const handleDelete = (e) => {
        console.log("ARE WE MAKING IT HERE?!")
        e.preventDefault()
        PostModel.delete(postId).then(data => {
            props.history.push('/')
        })
    }

    return (
        <div>
            <img src={imgUrl} alt="This is your post image" />
            <form onSubmit={handleSubmit}>
                <div className="form-group">
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
