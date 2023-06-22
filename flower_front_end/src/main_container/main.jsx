// import React from 'react';
import { useState } from 'react';
import Buttons from './buttons/buttons.jsx';
import Friends from '../friends/friends.jsx';
import General from '../general/general.jsx';
import Profile from '../profile/profile.jsx';


const Main = () => {

  const [ page, changePage ] = useState(<General/>);


  const updatePage = (pageName) => {

    if (pageName === "friends") {
      changePage(<Friends/>);
    } else if (pageName === "profile") {
      changePage(<Profile/>);
    } else {
      changePage(<General/>);
    }

  }

  return (
    <div className="main-container">

      <span>MAIN</span>

        {page}

        <Buttons updatePage={updatePage}/>
    </div>
  )
}

export default Main;
