import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Teams from './mains/teams';
import { base } from './base';

class App extends Component {

  constructor() {
    super();
    this.state = {
      teams: {},
      utils: {}
    }
  }

  componentWillMount() {
    this.teamsRef = base.syncState('teams', {
      context: this,
      state: 'teams'
    })
    this.utilsRef = base.syncState('utils', {
      context: this,
      state: 'utils'
    })
  }

  componentWillUnmount() {
    base.removeBinding(this.teamsRef);
    base.removeBinding(this.utilsRef);

  }

  render() {
    console.log(this.state);
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/teams" render={() => (<Teams teams={this.state.teams} />)} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
