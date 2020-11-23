import React, {useState, useEffect} from 'react';
import RelationshpitModel from "../models/relationship"

const SearchBar = () => {
    const [query, setQuery] = useState("%")

    const fetchData = () => {
        RelationshpitModel.
    }
    return (
      <>
        <form action="">
            <input type="text"/>
            <button>Search</button>
        </form>
      </>
    );
}

export default SearchBar;
