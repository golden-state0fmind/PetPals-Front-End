import React, { useState, useEffect } from 'react'
import CommentModel from '../models/comment'
import { Button } from 'react-bootstrap';

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
        <div>
            Edit Comment
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
                <Button type="submit">Update Comment</Button>
                <form onSubmit={handleDelete}><button type="submit">Delete Comment</button></form>
            </form>
        </div>
    )
}

export default EditComment
