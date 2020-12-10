import React from 'react';
import Image from './Image'



const Images = (props) => {
    const images = props.images.map((image, index) => (
        <Image key={index} imgUrl={image.imgUrl} imgClass={props.imgClass} userInfo={props.userInfo} type={props.type} />
    ))

    return (
        <div className={props.divClass}>
            {images.length >= 1 ? images : "No photos"}
        </div>
    );
}

export default Images;
