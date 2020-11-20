const url = `http://localhost:4000/api/v1`

class ImageModel {
  static all = () => {
    return fetch(`${url}/images`).then(res => res.json())
  }

  static updateProfilePic = (imgData, userId) => {
    //i need a backened route that uses the user id to find that user and update the imgURL with image data
//i think i need to pass user ID in the URL pattern as a params
    return fetch(`${url}/images/profilepic/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(imgData)
    })
      .then(res => res.json())
  }

  static delete = (imgId) => {
    return fetch (`${url}/images/${imgId}`, {method: "DELETE"}).then(res => res.json())
  }
}

export default ImageModel
