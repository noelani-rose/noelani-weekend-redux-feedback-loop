import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
// IMPORT COMPONENTS

function App() {
  const dispatch = useDispatch();

  useEffect(() => {

  }, [])

  // AXIOS POST
  // take in feedback as argument 
  // function to submit feedback and send to database
  // then clear feedback object 

  return (

    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
    </div>
  );
}

export default App;
