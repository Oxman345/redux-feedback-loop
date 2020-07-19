import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const state = {
    feeling: '',
    understanding: '',
    support: '',
    comments: '',
  }

function reducer(state, action) {
    switch(action.type) {
        case 'UPDATE_FEELING':
            return { ...state, feeling: action.payload };
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
