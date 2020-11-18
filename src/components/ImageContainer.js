import React from 'react';


const ImageContainer = (props) => {
    // If we are on home page display up to 8 img 
    // If on profile page half the size and 2 comontents  
 
    return (
        <div>
            <img src={props.imgUrl} alt=""/>
        </div>
    );
}

export default ImageContainer;
