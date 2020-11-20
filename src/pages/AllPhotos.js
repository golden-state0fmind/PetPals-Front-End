import React,{useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import ImageModel from '../models/images'
import '../css/allphotos.css'

const AllPhotos = () => {
    const [images, setImages] = useState([])
   

    const fetchImages=() => {
        ImageModel.all().then((imgData)=>{
          
          setImages(imgData.images)
        })
      }
   

      const handleProfilePic = (e) =>{
        e.preventDefualt()
      }

      const handleDelete = (e) => {
        e.preventDefualt()
      }

      useEffect(()=>{fetchImages()},[])

      const allImages = images.map((image, index)=>(
          <div>
            <img src={image.imageUrl} alt="User personal images" key={index} className='all-image' id={image.id} />
            <form onSubmit={handleDelete}>
                <input type="hidden" name='imgId' value={image.id}/>
             <button>    Delete  </button> </form>
            <form onSubmit={handleProfilePic}> <button>   Make Profile pic  </button> </form>
          </div>
      ))

    return (
        <div>
            {allImages}
        </div>
    )
}

export default AllPhotos
