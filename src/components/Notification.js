import React, {useState} from 'react';
import RelationshipModel from '../models/relationship'

const Notification = (props) => {
    // console.log(props.relationship)
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
        <div>
        {props.relationship.userOne.id !== userId ? <h3>{props.relationship.userOne.firstName}  {props.relationship.userOne.lastName}</h3> : ""}
        {props.relationship.userTwo.id !== userId ? <h3>{props.relationship.userTwo.firstName}  {props.relationship.userTwo.lastName}</h3> : ""}
            <button onClick={handleSubmit}>Accept friend request</button>
        </div>
    );
}

export default Notification;
