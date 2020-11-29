import React, { useState } from 'react'
import CommentModel from '../models/comment'
import '../css/addComment.css'

const AddComment = (props) => {
    const [content, setContent] = useState('')
    const [postId] = useState(props.match.params.id)
    const [userId] = useState(localStorage.getItem('id'))

    const handleSubmit = (e) => {
        e.preventDefault()
        CommentModel.create({
            postId,
            content,
            userId,
        }).then(data => {
            props.history.push('/')
        })
    }

    return (
        <div className="ac-body">
            <h1 className="ac-heading">Add Comment</h1>
            <form className="ac-form" onSubmit={handleSubmit}>
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
                <button className="ac-button" type="submit">Post Comment</button>
            </form>
        </div>
    )
}

export default AddComment
