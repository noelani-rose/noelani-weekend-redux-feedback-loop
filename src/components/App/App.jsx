import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Header from '../Header/Header';
import Feeling from '../Feeling/Feeling';
import Understand from '../Understand/Understand';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import SuccessPage from '../SuccessPage/SuccessPage';

function App() {

  // axios request to post incoming data(review) to server
  const storeReview = (review) => {
    axios({
      method: 'POST', 
      url: '/feedback', 
      data: review 
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log('error posting review to server', err);
    });
  };


  return (
    <Router>
      <head>
        {/* just experimentin with fonts */}
	      <link href="styles.css" rel="stylesheet" />
	      <link href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"/>
      </head>

      <div className='App'>

        <Route exact path = '/'>
          <Header />
          <p id = "start">Let's get started!</p>
          <Link to = "/feeling">
            <button className = "startBtn">
              Start
            </button>
          </Link>
        </Route>

        <Route exact path = '/feeling'>
          <Feeling />
        </Route>

        <Route exact path = '/understand'>
          <Understand />
        </Route>

        <Route exact path = '/support'>
          <Support />
        </Route>

        <Route exact path = '/comments'>
          <Comments />
        </Route>

        {/* sending storeReview over to review page via props */}
        <Route exact path = '/review'>
          <Review storeReview = {storeReview}/>
        </Route>

        <Route exact path = '/success'>
          <SuccessPage />
        </Route>

      </div>
    </Router>
  );
}

export default App;
