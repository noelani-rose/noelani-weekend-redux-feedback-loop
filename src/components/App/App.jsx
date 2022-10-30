import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useEffect } from 'react';
// import { useDispatch } from 'react-redux'
// import { useHistory } from 'react-router-dom';
// IMPORT COMPONENTS
import Header from '../Header/Header';
import Feeling from '../Feeling/Feeling';
import Understand from '../Understand/Understand';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import SuccessPage from '../SuccessPage/SuccessPage';



function App() {
  // const dispatch = useDispatch();
  // const history = useHistory();

  useEffect(() => {

  }, [])


  const storeReview = () => {
    axios({
      method: 'POST', 
      url: '/feedback', 
      // data: 
    })
    .then((res) => {
      // do i need to run anything here? 
    })
    .catch((err) => {
      console.log('error posting review to server', err)
    })
  }




  // AXIOS POST
  // take in feedback as argument 
  // function to submit feedback and send to database
  // then clear feedback object 
  

  return (
    <Router>
      <div className='App'>

        <Route exact path = '/'>
          <Header />
          <p>Let's Get Started!</p><br></br> 
          <Link to = "/feeling">
            <button>
              {/* onClick = {startFeedback} */}
            Start</button>
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
