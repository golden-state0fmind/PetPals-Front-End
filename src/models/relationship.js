const url = `http://localhost:4000/api/v1`

class RelationshipModel {
  //show all for a specific post
  static search = (queryString) => {
    console.log(queryString)
    return fetch(`${url}/relationships/search/${queryString}`).then(res => res.json())
  }

//  show one for edit commentId
  static one = (commentId) => {
    return fetch(`${url}/comments/${commentId}`).then(res => res.json())
  }

  //Update Comment
  static update = (commentData, commentId) => {
    return fetch(`${url}/comments/${commentId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(commentData)
    })
      .then(res => res.json())
  }


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

export default RelationshipModel
