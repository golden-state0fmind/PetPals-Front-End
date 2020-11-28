import React, { useState, useEffect } from 'react'
import RelationshipModel from '../models/relationship'
import {Link} from 'react-router-dom'

const AccountInfo = () => {
    const [userId] = useState(localStorage.getItem('id'))
    const [email, setEmail] = useState()
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [birthdate, setBirthDate] = useState()

    const fetchUser = () => {
        RelationshipModel.one(userId).then(user => {
            setFirstName(user.user.firstName)
            setLastName(user.user.lastName)
            setBirthDate(user.user.birthdate)
            setEmail(user.user.email)
        })
    }

    useEffect(() => { fetchUser() }, [])

    return (
        <div>
            <h1>Account Info</h1>
            <p><span class="bold">Name:</span> {firstName} {lastName}</p>
            <p><span class="bold">Birthday:</span> {birthdate}</p>
            <p><span class="bold">Email:</span> {email}</p>
            {/* <button><Link to={`/post/${userId}/edit`}>Edit Info</Link></button> */}
        </div>
    )
}
export default AccountInfo