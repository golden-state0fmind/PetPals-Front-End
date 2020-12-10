import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CommentCard = (props) => {
  const [userId] = useState(localStorage.getItem('id'))

  const allComments = props.comments.map((comment, index) => (
    <div className="ec-card" key={index}>
      <p className="ec-content">{comment.content}</p>
      <div className="ec-link-wrapper">{userId === comment.userId ? <Link className="ec-emoji" to={`/comment/${comment.id}/edit`}>✍️</Link> : ""}</div>
    </div>
  ))
  return (

    <div>
      {allComments}
    </div>
  )
}

export default CommentCard
