import React, { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Routes from './config/routes'
import './App.css'
import UserModel from './models/user'

function App() {

  const [currentUser, setCurrentUser] = useState(localStorage.getItem('id'))
  const storeUser = (user) => {
    console.log(user)
    setCurrentUser({ user })
    localStorage.setItem('id', user.id)
    localStorage.setItem('firstName', user.firstName)
    localStorage.setItem('lastName', user.lastName)
  }
  const logout = (event) => {
    event.preventDefault()
    localStorage.removeItem('id')
    UserModel.logout()
      .then(res => {
        setCurrentUser(null)
        //redirect to /login
      })
  }

  return (
    <div className="App">
      <Header
        currentUser={currentUser}
        logout={logout}
      />
      <Routes
        currentUser={currentUser}
        storeUser={storeUser}
      />
      <Footer />
    </div>
  );
}

export default App 