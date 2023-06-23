// import './profile.css';

import { useEffect, useState } from 'react';

import Authenticate from './authenticate/authenticate.jsx';
import LoggedIn from './logged_in/loggedIn.jsx';

const Profile = () => {

  const [ creds, login ] = useState("bob");

  return (
    <div>
      <span>PROFILE</span>
      {
        creds ? <LoggedIn /> : <Authenticate />
      }
    </div>
  )
}

export default Profile;