import SignUp from './signup.jsx';
import Login from './login.jsx';
import { useState } from 'react';

const Authenticate = () => {

  const [ page, updatePage ] = useState('login');

  const changePage = (name) => {
    updatePage(name);
  }

  return (
    <div>
      {/* <span>Authenticate</span> */}
      {
        page === "login" ?
        <Login changePage={changePage} />
        :
        <SignUp changePage={changePage} />
      }
      {/* <Login /> */}
      {/* <SignUp /> */}
    </div>
  )
}

export default Authenticate;
