const url = `http://localhost:4000/api/v1`

class RelationshipModel {
  //show all for a specific post
  static search = (queryString) => {
    console.log(queryString)
    return fetch(`${url}/relationships/search/${queryString}`).then(res => res.json())
  }

//  show one for edit commentId
  static one = (userId) => {
    return fetch(`${url}/relationships/${userId}`).then(res => res.json())
  }

  //Update Comment
  static update = (commentData, commentId) => {
    return fetch(`${url}/relationships/${commentId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(commentData)
    })
      .then(res => res.json())
  }

  // Get all pending request for a user.
  static pending = userId =>{
    return fetch (`${url}/relationships/${userId}`).then(res => res.json())
  }


  static create = (relationshipData) => {
    console.log(relationshipData)
    console.log("test")
    return fetch(`${url}/relationships`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(relationshipData)
    })
      .then(res => res.json())
  }
}

export default RelationshipModel
