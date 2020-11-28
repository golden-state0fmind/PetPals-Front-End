import React, {useState} from 'react';

const Friend = (props) => {

    const [userId] = useState(parseInt(localStorage.getItem('id')))
    // console.log(props, userId)
    return (
        <div>
            {props.friend.userOne.id !== userId ? <h3>{props.friend.userOne.firstName}  {props.friend.userOne.lastName}</h3> : ""}
            {props.friend.userTwo.id !== userId ? <h3>{props.friend.userTwo.firstName}  {props.friend.userTwo.lastName}</h3> : ""}
        </div>
    );
}

export default Friend;
