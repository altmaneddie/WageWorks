import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { base } from './base';
import Header from './mains/header';
import LandingPage from './pages/landing-page';
import Utils from './pages/utils';
import Repository from './pages/repository';
import Teams from './pages/teams';

class App extends Component {

  constructor() {
    super();
    this.state = {
      teams: {},
      utils: {},
      templates: {},
      history: {}
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
    this.templatesRef = base.syncState('templates', {
      context: this,
      state: 'templates'
    })
    this.historyRef = base.syncState('history', {
      context: this,
      state: 'history'
    })
  }

  componentWillUnmount() {
    base.removeBinding(this.teamsRef);
    base.removeBinding(this.utilsRef);
    base.removeBinding(this.templatesRef);
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className='header'>
            <Header />
          </div>
          <div>
            <Route exact path="/" render={() => (<LandingPage teams={this.state.teams} />)} />
            <Route exact path="/teams" render={() => (<Teams teams={this.state.teams} history={this.state.history} />)} />
            <Route exact path="/utilities" render={() => (<Utils utils={this.state.utils} />)} />
            <Route exact path="/repository" render={() => (<Repository templates={this.state.templates} />)} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
