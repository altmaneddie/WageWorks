import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { base } from './base';
import Header from './mains/header';
import LandingPage from './pages/landing-page';
import Utils from './pages/utils';
import Repository from './pages/repository';
import Updates from './pages/updates';
import Leadership from './pages/leadership';
import Teams from './pages/teams';
import Connections from './pages/connections';

class App extends Component {

  constructor() {
    super();
    this.state = {
      general: {},
      teams: {},
      utils: {},
      templates: {},
      history: {},
      updates: {},
      leadership: {},
      connections: {}
    }
  }

  componentWillMount() {
    this.generalRef = base.syncState('general', {
      context: this,
      state: 'general'
    })
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
    this.updatesRef = base.syncState('updates', {
      context: this,
      state: 'updates'
    })
    this.leadershipRef = base.syncState('leaders', {
      context: this,
      state: 'leadership'
    })
    this.connectionsRef = base.syncState('connections', {
      context: this,
      state: 'connections'
    })
  }

  componentWillUnmount() {
    base.removeBinding(this.generalRef);
    base.removeBinding(this.teamsRef);
    base.removeBinding(this.utilsRef);
    base.removeBinding(this.templatesRef);
    base.removeBinding(this.historyRef);
    base.removeBinding(this.updatesRef);
    base.removeBinding(this.leadershipRef);
    base.removeBinding(this.connectionsRef);
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className='header'>
            <Header />
            <hr />
          </div>
          <div>
            <Route exact path="/" render={() => (<LandingPage general={this.state.general} />)} />
            <Route exact path="/teams" render={() => (<Teams teams={this.state.teams} history={this.state.history} />)} />
            <Route exact path="/utilities" render={() => (<Utils utils={this.state.utils} />)} />
            <Route exact path="/updates" render={() => (<Updates updates={this.state.updates} />)} />
            <Route exact path="/repository" render={() => (<Repository templates={this.state.templates} />)} />
            <Route exact path="/leadership" render={() => (<Leadership leadership={this.state.leadership} />)} />
            <Route exact path="/connections" render={() => (<Connections connections={this.state.connections} />)} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
