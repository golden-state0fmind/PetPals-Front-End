import React, { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Routes from './config/routes'
import './App.css'
import UserModel from './models/user'

function App() {

  const [currentUser, setCurrentUser] = useState(localStorage.getItem('id'))
  const storeUser = (userId) => {
    setCurrentUser({ userId })
    localStorage.setItem('id', userId)
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