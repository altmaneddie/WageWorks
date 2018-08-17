import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import * as firebase from 'firebase';
import './App.css';
import Teams from './mains/teams';

class App extends Component {

  constructor () {
    super();''
    const rootRef = firebase.database().ref().child('Team');
    let data;
    rootRef.on('value', snap => {
      data = snap.val();
      console.log(data);
    });
    this.state = data;
  }
  
  render() {
    console.log(this.state);
    return (
      <BrowserRouter>
      <div className="App">
        {/* <Route exact path="/" component={MainPage} /> */}
        <Route exact path="/teams" component={Teams} />
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
