import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const state = {
    feeling: Number(''),
    understanding: Number(''),
    support: Number(''),
    comments: '',
  }

function reducer(state, action) {
    switch(action.type) {
        case 'UPDATE_FEELING':
            return { ...state, feeling: action.payload };
        case 'UPDATE_UNDERSTANDING':
            return { ...state, understanding: action.payload };
        case 'UPDATE_SUPPORT':
                return { ...state, support: action.payload };
        case 'UPDATE_COMMENTS':
                return { ...state, comments: action.payload };
        default:
            return state;
    }
}

const storeInstance = createStore(
    reducer,
    state,
    applyMiddleware(logger) 
);

// console.log(storeInstance.getState());

ReactDOM.render(<Provider store={storeInstance}>
    <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
