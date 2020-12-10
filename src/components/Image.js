import React from 'react';

const Image = (props) => {
    const altTag = `${props.type} belong to ${props.userInfo}`
    return (
        <div >
            <img className={props.imgClass} src={props.imgUrl} alt={altTag} />
        </div>
    );
}

export default Image;
