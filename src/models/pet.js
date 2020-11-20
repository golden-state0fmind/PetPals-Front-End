const url = `http://localhost:4000/api/v1`

class PetModel {
  static all = () => {
    console.log("HOWBOUTHERE?!?!?!?!?!?")
    return fetch(`${url}/pets`).then(res => res.json())
  }

  // static show = (gameId) => {
  //   return fetch(`${url}/pets/${gameId}`).then(res => res.json())
  // }

  static create = (petData) => {
    return fetch(`${url}/pets`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(petData)
    })
      .then(res => res.json())
  }
}

export default PetModel
