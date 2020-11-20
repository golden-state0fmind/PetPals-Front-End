import React, {useState} from 'react';


const ImageContainer = (props) => {
    const [currentUserId, setcurrentUserId] = useState(localStorage.getItem('id'))
    // If we are on home page display up to 8 img 
    // If on profile page half the size and 2 comontents  
    const images = props.images.map((image, index) => (
        <div key={index}>
        { image.userId == currentUserId ?
        <img className={props.imgClass} src={image.imageUrl} alt="Users personal photos"  />
        : ""}
        </div>
    ))

    return (
        <div className={props.divClass}>
            {images}
        </div>
    );
}

export default ImageContainer;
