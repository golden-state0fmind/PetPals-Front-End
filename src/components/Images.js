import React, {useState} from 'react';
import Image from './Image'



const Images = (props) => {
    const [currentUserId, setcurrentUserId] = useState(localStorage.getItem('id'))

    console.log("~~~~~", props.images)
    const images = props.images.map((image, index) => (
        <Image key={index} imgUrl={image.imgUrl} imgClass={props.imgClass}/>
    ))

    return (
        <div className={props.divClass}>
            {images.length >= 1 ? images : "No photos"}
        </div>
    );
}

export default Images;
