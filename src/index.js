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


const feeling = (state = 2, action) => {
    console.log('the new state is', state)
    if (action.type === 'SET_FEELING'){
        return action.payload
    }
    return state
}



const storeInstance = createStore(
    combineReducers({
        feeling,
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
