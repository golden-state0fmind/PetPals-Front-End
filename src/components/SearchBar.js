import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import "../css/searchbar.css";

const SearchBar = () => {

    const [query, setQuery] = useState("")

    return (
        <form >
            <input 
                className="search-input"
                type="text" 
                onChange={(e)=>{setQuery(e.target.value) }}
                placeholder="search for friends..."
                name="query"
            />
            <button className="search-button"><Link to={`/search/${query}`}>fetch</Link></button>
            
        </form>
    );
}

export default SearchBar;
