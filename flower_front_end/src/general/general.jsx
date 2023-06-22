import Posts from '../components/posts/posts.jsx';
import MakePost from '../components/make_post/makePost.jsx';

const General = ({ updatePage }) => {
  return (
    <div>
      <span>GENERAL</span>
      <MakePost updatePage={updatePage}/>
      <Posts />
    </div>
  )
}

export default General;