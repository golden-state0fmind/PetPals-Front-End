import React, { useState, useEffect } from 'react'
import CommentModel from '../models/comment'
import '../css/editComment.css'


const EditComment = (props) => {
    const [userId] = useState(localStorage.getItem('id'))
    const [commentId] = useState(props.match.params.id)
    const [content, setContent] = useState('')

    const fetchComment = () => {
        CommentModel.one(commentId).then((commentData) => {
            setContent(commentData.comment.content)
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        CommentModel.update({ content }, commentId)
            .then(data => {
                props.history.push('/')
            })
    }

    //need a function for the delete button 
    const handleDelete = (e) => {
        e.preventDefault()
        CommentModel.delete(commentId).then(data => {
            props.history.push('/')
        })
    }

    useEffect(() => { fetchComment() }, [])

    return (
        <div className="ec-body">
            <h1 className="ec-heading">Edit Comment</h1>
            <form className="ec-form" onSubmit={handleSubmit}>
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
                <div className="ec-button-wrapper">
                    <button className="ec-button" type="submit">✅</button>
                    <form onSubmit={handleDelete}><button className="ec-button" type="submit">🗑️</button></form>
                </div>
            </form>
        </div>
    )
}

export default EditComment
