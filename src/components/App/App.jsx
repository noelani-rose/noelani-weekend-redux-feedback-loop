import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
// IMPORT COMPONENTS
import Feeling from '../Feeling/Feeling';
import Header from '../Header/Header';

function App() {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {

  }, [])

  // I want my home page to have a start button, 
  // which when clicked, sends me to feeling component 
  // const startFeedback = () => {
  //   history.push('/feeling')  
  // }


  // AXIOS POST
  // take in feedback as argument 
  // function to submit feedback and send to database
  // then clear feedback object 

  return (
    <Router>
      <div className='App'>

        <Route exact path = '/feedback'>
          <Header />
        <p>Let's Get Started!</p><br></br> 
        <Link to = "/feeling">
          <button>Start</button>
       </Link>
       
        </Route>

        <Route exact path = '/feeling'>
          <Feeling />
        </Route>

      </div>
    </Router>
  );
}

export default App;
