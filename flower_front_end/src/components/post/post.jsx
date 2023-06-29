import React from 'react';
import './post.css'

const Post = ({ image, desc }) => {

  return (
    <div className="post-card-holder">
        <div class="card" >
          <img src={require('../../sample_data/images/flower_1.jpeg')} alt="flower" />
          <div class="card-body">
            <p className="post-name">joddy</p>
            <p class="card-text">{desc}</p>
            <p className="time">2 hours ago</p>
          </div>
        </div>
    </div>
  );

}

export default Post;

