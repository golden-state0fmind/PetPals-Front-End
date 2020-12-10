import React, {useState, useEffect} from 'react';
import Friend from './Friend'
import RelationshipModel from "../models/relationship";

const Friends = () => {

    const [friends, setFriends] = useState([])

    const fetchUser = () =>{
        RelationshipModel.friendsLimit(localStorage.getItem('id')).then(friends =>{
            setFriends(friends.friendsList)
        })
    }
    useEffect(() =>{fetchUser()},[])

    const friendsList = friends.map((friend, index) =>(
        <Friend key={index} friend={friend}/>
    ))

    return (
        <div className="friends-list-profile">
            {friendsList}
        </div>
    );
}

export default Friends;
