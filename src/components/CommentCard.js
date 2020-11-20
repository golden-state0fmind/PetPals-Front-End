import React, {useState} from 'react'
import {Link} from 'react-router-dom'

const CommentCard = (props) => {
  const [userId] = useState(localStorage.getItem('id'))

  const allComments = props.comments.map((comment, index) => (
    <div key={index}>
      <p>{comment.createdAt}</p>
      <p>{comment.updatedAt}</p>
      <p>{comment.userId}</p>
      <p>{comment.content}</p>
      {userId == comment.userId ? <Link to={`/comment/${comment.id}/edit`}>Edit Comment</Link> : ""}
    </div>
  ))
  return (
    
    <div>
      {allComments}
    </div>
  )
}

export default CommentCard
