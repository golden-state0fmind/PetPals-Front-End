import React, {useState, useEffect} from "react";
import RelationshipModel from "../models/relationship"

const SearchResults = (props) => {
    console.log(props.match.params.query)
    const fetchUsers = () =>{
        RelationshipModel.search(props.match.params.query)
        .then(foundUsers =>{
            console.log(foundUsers)
        })
    }

    useEffect(()=>{fetchUsers()},[])


    return (
        <div>
            search
        </div>
    );
}

export default SearchResults;
