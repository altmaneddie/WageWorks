import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { base } from './base';
import Utils from './pages/utils';
import Util from './components/util';
import Teams from './pages/teams';

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
          <Route exact path="/utilities" render={() => (<Utils utils={this.state.utils} />)} />
          <Route exact path="/util" render={() => (<Util utils={this.state.utils} />)} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
