import React from 'react';


const ImageContainer = (props) => {
    // If we are on home page display up to 8 img 
    // If on profile page half the size and 2 comontents  
    const images = props.images.map(image =>(
        <img className={props.class} src={image.imageUrl} alt="Users personal photos" />
    ))
    
    return (
        <div>
            {images}
        </div>
    );
}

export default ImageContainer;
