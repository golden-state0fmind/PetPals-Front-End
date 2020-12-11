import React, { useState, useEffect } from 'react';
import Notification from '../components/Notification'
import RelationshipModel from '../models/relationship'
import '../css/notifications.css'

const Notifications = (props) => {

    const [userId] = useState(localStorage.getItem('id'))
    // const [users, setUsers] = useState([])
    const [relationship, setRelationship] = useState([])

    const fethData = () => {
        RelationshipModel.pending(userId).then(requests => {
            // Filtering out current user
            for (let i = 0; i < requests.relationships.length; i++) {
                if (requests.relationships[i].userOne.id !== parseInt(userId)) {
                    setRelationship((oldArray) => [...oldArray, requests.relationships[i]]);
                    // setUsers((oldArray) => [...oldArray, requests.relationships[i].userOne]);
                }
                if (requests.relationships[i].userTwo.id !== parseInt(userId)) {
                    setRelationship((oldArray) => [...oldArray, requests.relationships[i]]);
                    // setUsers((oldArray) => [...oldArray, requests.relationships[i].userTwo]);
                }
            }
        })
    }

    const request = relationship.map((relationship, index) => (
        <Notification key={index} relationship={relationship} />
    ))


    // useEffect(() => { fethData() }, [])
    return (
        <div className="n-body">
            <h1 className="n-heading">Notifications</h1>
            {request}
        </div>
    );
}

export default Notifications;
