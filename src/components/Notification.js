import React, {useState} from 'react';
import RelationshipModel from '../models/relationship'

const Notification = (props) => {
    const [userId] = useState(parseInt(localStorage.getItem('id')))

    const handleSubmit = (e) => {
        
        RelationshipModel.update( {
            status: 1,
            actionUserId: userId
        }, props.relationship.id)
        .then(data => {
            props.history.push('/')
        })
    }

    return (
        <div className="n-results">
        <span className="n-emoji">👤</span>
        {props.relationship.userOne.id !== userId ? <h3 className="userName">{props.relationship.userOne.firstName}  {props.relationship.userOne.lastName}</h3> : ""}
        {props.relationship.userTwo.id !== userId ? <h3 className="userName">{props.relationship.userTwo.firstName}  {props.relationship.userTwo.lastName}</h3> : ""}
            <button className="n-button" onClick={handleSubmit}>Accept friend request</button>
        </div>
    );
}

export default Notification;
