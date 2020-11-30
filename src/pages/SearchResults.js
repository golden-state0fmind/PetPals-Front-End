import React, {useState, useEffect} from "react";
import RelationshipModel from "../models/relationship"
import Results from "../components/Results"
import "../css/results.css"

const SearchResults = (props) => {
    
    const [users, setUsers] = useState([])

    const fetchUsers = () =>{
        RelationshipModel.search(props.match.params.query)
        .then(foundUsers =>{
            setUsers(foundUsers.user)
        })
    }

    useEffect(()=>{fetchUsers()},[])

    return (
        <div className="r-container">
        <h1 className="r-heading">Results</h1>
            <div className="result-container"><Results users={users}/></div>
        </div>
    );
}

export default SearchResults;
