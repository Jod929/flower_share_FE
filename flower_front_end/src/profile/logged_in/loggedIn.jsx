import UserProfile from './user_profile/userProfile.jsx';
import UserPics from './users_pics/userPics.jsx';

const LoggedIn = () => {
  return (
    <div>
      <UserProfile />
      <UserPics />
    </div>
  )
}

export default LoggedIn;