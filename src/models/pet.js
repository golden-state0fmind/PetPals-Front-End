const url = `http://localhost:4000/api/v1`

class PetModel {
  static all = () => {
    return fetch(`${url}/pets`).then(res => res.json())
  }

  static one = (petId) => {
    return fetch(`${url}/pets/${petId}`).then(res => res.json())
  }

  static update = (petData, petId) => {
    console.log("petId", petId)
    console.log("petData", petData)
    return fetch(`${url}/pets/${petId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(petData)
    })
      .then(res => res.json())
  }

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
