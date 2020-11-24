import React from 'react';

const Image = (props) => {
    console.log(props.imgUrl)
    return (
        <div >
        <img className={props.imgClass} src={props.imgUrl} alt="Users personal photos"  />
        {/* : ""} */}
        </div>
    );
}

export default Image;
