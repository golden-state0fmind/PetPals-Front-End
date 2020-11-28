import React from 'react';

const Image = (props) => {
    return (
        <div >
            <img className={props.imgClass} src={props.imgUrl} alt="Users personal photos"  />
        </div>
    );
}

export default Image;
