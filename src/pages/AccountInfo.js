import React, { useState, useEffect } from 'react'
import RelationshipModel from '../models/relationship'
import '../css/accountInfo.css'

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
        <div className="ai-body">
            <div className="ai-content">
                <h1 className="ai-heading">Account Info</h1>
                <p className="ai-detail"><span className="bold">Name:</span> {firstName} {lastName}</p>
                <p className="ai-detail"><span className="bold">Birthday:</span> {birthdate}</p>
                <p className="ai-detail"><span className="bold">Email:</span> {email}</p>
                {/* <button><Link to={`/post/${userId}/edit`}>Edit Info</Link></button> */}
            </div>
        </div>
    )
}
export default AccountInfo