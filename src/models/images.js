const url = `http://localhost:4000/api/v1`

class ImageModel {
  static all = () => {
    return fetch(`${url}/images`).then(res => res.json())
  }

  static delete = (imgId) => {
    return fetch (`${url}/images/${imgId}`)
  }
}

export default ImageModel
