import Posts from '../components/posts/posts.jsx';
import MakePost from '../components/make_post/makePost.jsx';

const Friends = ({ updatePage }) => {
  return (
    <div>
      <span>FRIENDS</span>
      <MakePost updatePage={updatePage}/>
      <Posts />
    </div>
  )
}

export default Friends;