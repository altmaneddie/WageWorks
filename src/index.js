import 'bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// in case of issues with app running use:
// npm install webpack@4.5.0 html-webpack-plugin@3.2.0 --save-dev

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();