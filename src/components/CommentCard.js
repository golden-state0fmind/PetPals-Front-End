import React from 'react'


const CommentCard = (props) => {
  const allComments = props.comments.map((comment, index) => (
    <div key={index}>
      <p>{comment.createdAt}</p>
      <p>{comment.updatedAt}</p>
      <p>{comment.userId}</p>
      <p>{comment.content}</p>
    </div>
  ))
  return (
    
    <div>
      {allComments}
    </div>
  )
}

export default CommentCard
