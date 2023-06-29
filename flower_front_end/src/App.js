// import logo from './logo.svg';
import './App.css';

import Main from './main_container/main.jsx';

import { useEffect } from 'react';

import axios from 'axios';


function App() {

  // const [ user, updateUser ] = useState();

  useEffect(() => {

    axios.get('http://localhost:8080/api/v1/person')
    .then((data) => {
      console.log(data);
    })

  }, [])



  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
       */}

       <Main />
    </div>
  );
}

export default App;
