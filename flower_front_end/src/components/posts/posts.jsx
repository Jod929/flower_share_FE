import Post from '../post/post.jsx';
import { posts } from '../../sample_data/posts.js';

const Posts = () => {

  return (
    <div>
      {posts.map((post) => {
        return (
          <Post image={post.image} desc={post.desc}/>
        )
      })}
    </div>
  )
}

export default Posts;