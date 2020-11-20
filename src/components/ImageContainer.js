import React from 'react';


const ImageContainer = (props) => {
    // If we are on home page display up to 8 img 
    // If on profile page half the size and 2 comontents  
    const images = props.images.map((image, index) => (
        <img className={props.imgClass} src={image.imageUrl} alt="Users personal photos" key={index} />
    ))

    return (
        <div className={props.divClass}>
            {images}
        </div>
    );
}

export default ImageContainer;
