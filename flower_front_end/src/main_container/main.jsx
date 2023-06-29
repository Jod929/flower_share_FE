// import React from 'react';
import { useState } from 'react';
import Buttons from './buttons/buttons.jsx';
import Friends from '../friends/friends.jsx';
import General from '../general/general.jsx';
import Profile from '../profile/profile.jsx';
import AddPost from '../components/make_post/add_post/addPost.jsx'


const Main = () => {

  const updatePage = (pageName) => {

    if (pageName === "friends") {
      changePage(<Friends updatePage={updatePage}/>);
    } else if (pageName === "profile") {
      changePage(<Profile/>);
    } else if (pageName === "post") {
      changePage(<AddPost updatePage={updatePage}/>);
    } else {
      changePage(<General updatePage={updatePage}/>);
    }

  }

  const [ page, changePage ] = useState(<General updatePage={updatePage}/>);

  return (
    <div className="main-container">

        {page}

        <Buttons updatePage={updatePage}/>
    </div>
  )
}

export default Main;
