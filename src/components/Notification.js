import React from 'react';

const Notification = (props) => {
    console.log(props.user)
    return (
        <div>
            <h3>{props.user.firstName} {props.user.lastName} </h3>
            <button>Add Friend</button>
        </div>
    );
}

export default Notification;
