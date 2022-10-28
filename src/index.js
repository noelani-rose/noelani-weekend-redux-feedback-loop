import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import logger from 'redux-logger'


const feedback = (state = [], action) => {
    switch (action.type){
        case 'SET_FEELING':
            return action.payload
        case 'SET_UNDERSTAND':
            return [
                ...state,
                action.payload
            ];
        case 'SET_SUPPORT':
            return [
                ...state,
                action.payload
            ];
        case 'SET_COMMENTS':
            return [
                ...state,
                action.payload
            ]
    }
    return state
}


const feeling = (state = 0, action) => {
    if (action.type === 'SET_FEELING'){
        return action.payload
    }
    return state
}

const understand = (state = 0, action) => {
    if (action.type === 'SET_UNDERSTAND'){
        return action.payload
    }
    return state
}

const support = (state = 0, action) => {
    if (action.type === 'SET_SUPPORT'){
        return action.payload
    }
    return state
}

const comments = (state = 0, action) => {
    if (action.type === 'SET_COMMENTS'){
        return action.payload
    }
    return state
}



const storeInstance = createStore(
    combineReducers({
        feeling,
        feedback,
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
