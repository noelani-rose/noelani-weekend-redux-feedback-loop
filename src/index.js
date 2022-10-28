import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import logger from 'redux-logger'


const feedback = (state = [], action) => {
    // console.log('state is', state, 'and action is', action)
    return state
}

const storeInstance = createStore(
    combineReducers({
        feedback,
    }),
    applyMiddleware(logger)
)




ReactDOM.render(
<Provider store = {storeInstance}>
    <App />
</Provider>
, document.getElementById('root'));
registerServiceWorker();
