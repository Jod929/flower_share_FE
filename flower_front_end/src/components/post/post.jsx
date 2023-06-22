import React from 'react';
import './post.css'

const Post = ({ image, desc }) => {

  return (
    <div className="post-card-holder">
        <div class="card" >
          <img src={require('../../sample_data/images/flower_1.jpeg')} class="card-img-top" alt="flower" />
          <div class="card-body">
            <p class="card-text">{desc}</p>
          </div>
        </div>
    </div>
  );

}

export default Post;

