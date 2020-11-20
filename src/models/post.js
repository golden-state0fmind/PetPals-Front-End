const url = `http://localhost:4000/api/v1`

class PostModel {
  static all = () => {
    return fetch(`${url}/posts`).then(res => res.json())
  }

  //find one use and get all their posts
  static oneUser = (userId) => {
    return fetch(`${url}/posts/profile/${userId}`)
      .then(res => res.json())
  }

  static onePost = (postId) => {
    //get one post from one user
    return fetch(`${url}/posts/${postId}`)
      .then(res => res.json())
  }

  static update = (postData, postId) => {
    return fetch(`${url}/posts/${postId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(postData)
    })
      .then(res => res.json())
  }

  static create = (postData) => {
    return fetch(`${url}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(postData)
    })
      .then(res => res.json())
  }

  static delete = (postId) => {
    console.log("WE BE DELETING!!", postId)
    return fetch(`${url}/posts/${postId}`, {method: "DELETE"})
    .then(res => res.json())
  }

}



export default PostModel