import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import logger from 'redux-logger'


// const feedback = (state = [], action) => {
//     // console.log('state is', state, 'and action is', action)
//     return state

// }


const feeling = (state = 0, action) => {
    console.log('the new feeling state is', state)
    if (action.type === 'SET_FEELING'){
        return action.payload
    }
    return state
}

const understand = (state = 0, action) => {
    console.log('the new understanding state is', state)
    if (action.type === 'SET_UNDERSTAND'){
        return action.payload
    }
    return state
}

const support = (state = 0, action) => {
    console.log('the new support state is', state)
    if (action.type === 'SET_SUPPORT'){
        return action.payload
    }
    return state
}

const comments = (state = 0, action) => {
    console.log('the new comments state is', state)
    if (action.type === 'SET_COMMENTS'){
        return action.payload
    }
    return state
}



const storeInstance = createStore(
    combineReducers({
        feeling,
        // feedback,
        understand,
        support,
        comments,
    }),
    applyMiddleware(logger)
)




ReactDOM.render(
<Provider store = {storeInstance}>
    <App />
</Provider>
, document.getElementById('root'));
registerServiceWorker();
