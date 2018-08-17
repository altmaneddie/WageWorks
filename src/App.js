import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import * as firebase from 'firebase';
import './App.css';
import Teams from './mains/teams';

class App extends Component {
  constructor(){
    super();
    const rootRef = firebase.database().ref().child('Team');

    rootRef.on('value', snap => {
      this.state = snap.val();
      console.log(this.state);
    })
  }
  
  render() {
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
