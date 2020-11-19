import React, {useState} from "react";
import PostModel from '../models/post'

const CreatePost = (props) => {

    const [content, setContent] = useState('')
    const [imgUrl, setImgUrl] = useState('https://upload.wikimedia.org/wikipedia/en/9/9f/AceVenturaFilm.PNG')
    const [userId, setUser] = useState(props.currrentUser)
    
  

    const handleSubmit = (e) =>{
        e.preventDefault()
        // PostModel.create({
        //     content, 
        //     imgUrl,
        //     userId,
        // }).then(data=>{
        //     props.history.push('/')
        // })
        console.log(props)

    }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <textarea
            onChange={(e)=>{setContent(e.target.value)}}
            rows="5"
            cols="40"
            type="text"
            id="content"
            name="content"
            value={content}
          />
        </div>
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
