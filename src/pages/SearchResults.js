import React, {useState, useEffect} from "react";
import RelationshipModel from "../models/relationship"
import Results from "../components/Results"

const SearchResults = (props) => {
    
    const [users, setUsers] = useState([])

    const fetchUsers = () =>{
        RelationshipModel.search(props.match.params.query)
        .then(foundUsers =>{
            setUsers(foundUsers.user)
        })
    }
    console.log(users)

    useEffect(()=>{fetchUsers()},[])


    return (
        <div>
            <Results users={users}/>
        </div>
    );
}

export default SearchResults;
