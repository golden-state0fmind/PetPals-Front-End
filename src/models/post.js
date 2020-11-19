const url = `http://localhost:4000/api/v1`

class PostModel {
  static all = () => {
    return fetch(`${url}/posts`).then(res => res.json())
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