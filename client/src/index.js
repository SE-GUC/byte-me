
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
//import  serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './globalState/store'

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
//serviceWorker.unregister();

