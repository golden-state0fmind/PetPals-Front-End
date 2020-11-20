import React, { useState } from "react";
import PostModel from '../models/post'
import ImageUploadBar from '../components/ImageUploadBar'

const CreatePost = (props) => {

  const [content, setContent] = useState('')
  const [imgUrl, setImgUrl] = useState('')
  const [userId, setUser] = useState(localStorage.getItem('id'))

  const handleSubmit = (e) => {
    e.preventDefault()
    PostModel.create({
      content,
      imgUrl,
      userId,
    }).then(data => {
      props.history.push('/')
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <textarea
            onChange={(e) => { setContent(e.target.value) }}
            rows="5"
            cols="40"
            type="text"
            id="content"
            name="content"
            value={content}
          />
        </div>
        <ImageUploadBar setImgUrl={setImgUrl} />
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
