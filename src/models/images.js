const url = `http://localhost:4000/api/v1`

class ImageModel {
  static all = () => {
    return fetch(`${url}/images`).then(res => res.json())
  }

//   static show = (gameId) => {
//     return fetch(`${url}/games/${gameId}`).then(res => res.json())
//   }

//   static create = (gameData) => {
//     return fetch(`${url}/games`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(gameData)
//     })
//       .then(res => res.json())
//   }
}

export default ImageModel
