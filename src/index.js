import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyB5usetQdq1ycsX0MlUlUwA83n5l8lp3Kk",
  authDomain: "wageworkapp-9674c.firebaseapp.com",
  databaseURL: "https://wageworkapp-9674c.firebaseio.com",
  projectId: "wageworkapp-9674c",
  storageBucket: "wageworkapp-9674c.appspot.com",
  messagingSenderId: "585186601219"
};

firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();