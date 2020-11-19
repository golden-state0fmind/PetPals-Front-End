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
  

  static onePost = () => {
//get one post from one user
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
}

export default PostModel