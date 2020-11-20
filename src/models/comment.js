const url = `http://localhost:4000/api/v1`

class CommentModel {
  //show all for a specific post
  static all = (postId) => {
    return fetch(`${url}/comments/post/${postId}`).then(res => res.json())
  }

  //show one for edit comment
  // static show = (gameId) => {
  //   return fetch(`${url}/games/${gameId}`).then(res => res.json())
  // }


  static create = (commentData) => {
    return fetch(`${url}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(commentData)
    })
      .then(res => res.json())
  }
}

export default CommentModel
