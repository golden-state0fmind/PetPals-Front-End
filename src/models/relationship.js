const url = `http://localhost:4000/api/v1`

class RelationshipModel {
  //Search results
  static search = (queryString) => {
    console.log(queryString)
    return fetch(`${url}/relationships/search/${queryString}`).then(res => res.json())
  }

//  Gets a single user
  static one = (userId) => {
    return fetch(`${url}/relationships/${userId}`).then(res => res.json())
  }

  //Updates relationship status
  static update = (relationshipData, relationshipId) => {
    console.log(relationshipId)
    return fetch(`${url}/relationships/${relationshipId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(relationshipData)
    })
      .then(res => res.json())
  }

  // Get all pending request for a user.
  static pending = userId =>{
    console.log(userId)
    return fetch (`${url}/relationships/pending/${userId}`).then(res => res.json())
  }

  static friendsLimit = userId =>{
    return fetch (`${url}/relationships/friends/limit/${userId}`).then(res => res.json())  
  }

  // Sends a friend request
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
