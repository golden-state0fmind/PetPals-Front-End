import React, {useState, useEffect} from 'react';
import RelationshipModel from '../models/relationship'

const PalsProfile = (props) => {
    console.log(props.match.params.id)
    const [user, setUser] = useState()

    const fetchUsers = () =>{
        RelationshipModel.one(props.match.params.id).then(user => {
            console.log(user)
        })
    }

    useEffect(()=>{fetchUsers()},[])
    return (
        <div>
            pals profile
        </div>
    );
}

export default PalsProfile;
