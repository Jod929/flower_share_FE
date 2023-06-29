// import './profile.css';

import { useState } from 'react';
// import axios from 'axios';
import axios from 'axios';

import Authenticate from './authenticate/authenticate.jsx';
import LoggedIn from './logged_in/loggedIn.jsx';

const Profile = () => {

  const [ creds, login ] = useState("bob");

  const sendPost = () => {
    axios.post('http://localhost:8080/api/v1/person',
    {"name": "Message From Client!"}
    )
  }

  return (
    <div>
      <button onClick={() => sendPost()}>Send Post Req</button>
      {
        creds ? <LoggedIn /> : <Authenticate />
      }

    </div>
  )
}

export default Profile;