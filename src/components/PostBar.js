import React from 'react';
import {Link} from 'react-router-dom'

const PostBar = () => {
    return (
        <div>
            <button> <Link to={'/createpost'}>Create a post</Link> </button>
          
        </div>
    );
}

export default PostBar;
