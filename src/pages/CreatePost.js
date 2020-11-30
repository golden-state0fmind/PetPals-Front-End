import React, { useState } from "react";
import PostModel from '../models/post'
import ImageUploadBar from '../components/ImageUploadBar'
import '../css/createPost.css'

const CreatePost = (props) => {

  const [content, setContent] = useState('')
  const [imgUrl, setImgUrl] = useState('')
  const [userId] = useState(localStorage.getItem('id'))

  const handleSubmit = (e) => {
    e.preventDefault()
    PostModel.create({
      content,
      imgUrl,
      userId,
    }).then(data => {
      props.history.push('/profile')
    })
  }

  return (
    <div className="cp-body">
      <h3 className="cp-heading">What's on your mind?</h3>
      <form className="cp-form" onSubmit={handleSubmit}>
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
        <button className="cp-button" type="submit">Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
