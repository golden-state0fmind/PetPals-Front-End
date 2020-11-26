import React, {useState} from 'react';
import {Link} from 'react-router-dom'

const SearchBar = () => {

    const [query, setQuery] = useState("")

    return (
      <>
        <form >
            <input 
                type="text" 
                onChange={(e)=>{setQuery(e.target.value) }}
                name="query"
            />
            <button><Link to={`/search/${query}`}> Search </Link></button>
            
        </form>
      </>
    );
}

export default SearchBar;
