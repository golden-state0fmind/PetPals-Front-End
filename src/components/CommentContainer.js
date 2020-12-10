import React from 'react'
import CommentCard from './CommentCard'

const CommentContainer = (props) => {
  return (
    <div>
      <CommentCard postId={props.postId} comments={props.comments}/>
    </div>
  )
}

export default CommentContainer
