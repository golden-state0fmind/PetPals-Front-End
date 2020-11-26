import React, {useState, useEffect} from 'react';
import Notification from '../components/Notification'
import RelationshipModel from '../models/relationship'

const Notifications = () => {
    
    const [userId] = useState(localStorage.getItem('id'))
    const [users, setUsers] = useState([])

   const fethData = () => {
       RelationshipModel.pending(userId).then( requests =>{
            console.log(requests)
            // Filtering out current user
            for(let i=0; i<requests.relationships.length; i++){
                if(requests.relationships[i].userOne.id !== parseInt(userId)){
                    setUsers((oldArray) => [...oldArray, requests.relationships[i].userOne]);
                }
                if(requests.relationships[i].userTwo.id !== parseInt(userId)){  
                    setUsers((oldArray) => [...oldArray, requests.relationships[i].userTwo]);
                }
            }
       })
    }
    console.log(users)

    const request = users.map((user, index) =>(
        <Notification user={user} key={index}/>
    ))
   

    useEffect(()=>{fethData()},[])
    return (
        <div>
            {request}
        </div>
    );
}

export default Notifications;
