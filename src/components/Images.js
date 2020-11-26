import React, {useState} from 'react';
import Image from './Image'



const Images = (props) => {
    const [currentUserId, setcurrentUserId] = useState(localStorage.getItem('id'))
    // If we are on home page display up to 8 img 
    // If on profile page half the size and 2 comontents  
    if(props.images.length >=1){
        
    }
            let images = props.images.map((image, index) => (
                <Image key={index} imgUrl={image.imageUrl} imgClass={props.imgClass}/>
            ))


    console.log(props.images)
    return (
        <div className={props.divClass}>
            {images.length >= 1 ? images : "No photos"}
        </div>
    );
}

export default Images;
