import React from 'react';
import {Link} from 'react-router-dom'
import '../css/postBar.css'

const PostBar = () => {
    return (
        <div className="align-statusbar"> 
        <div className="fake-statusbar-container">
        <div className="fake-statusbar"><Link className="fake-statustext" to={'/createpost'}>Say something...</Link></div>
            {/* <button className="pb-button"> <Link className="pb-button" to={'/createpost'}>Create a post</Link> </button> */}
        </div>
        </div>
    );
}

export default PostBar;
