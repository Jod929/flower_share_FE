import Post from '../post/post.jsx';
import { posts } from '../../sample_data/posts.js';
import './posts.css';

const Posts = () => {

  return (
    <div className="main-posts">
      {posts.map((post) => {
        return (
          <Post image={post.image} desc={post.desc}/>
        )
      })}
    </div>
  )
}

export default Posts;