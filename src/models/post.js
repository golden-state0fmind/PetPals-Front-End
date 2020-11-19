const url = `http://localhost:4000/api/v1`

class PostModel {
  static all = () => {
    return fetch(`${url}/posts`).then(res => res.json())
  }

}

export default PostModel