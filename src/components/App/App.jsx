import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
// import { useEffect } from 'react';

import Header from '../Header/Header';
import Feeling from '../Feeling/Feeling';
import Understand from '../Understand/Understand';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import SuccessPage from '../SuccessPage/SuccessPage';

function App() {


// TODO: Make min input 1, max input 5


  // useEffect(() => {

  // }, []);


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
      <div className='App'>

        <Route exact path = '/'>
          <Header />
          <p>Let's Get Started!</p><br></br> 
          <Link to = "/feeling">
            <button>
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
