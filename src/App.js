import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppHeader from './components/AppHeader';
import AppSidebar from './components/AppSidebar';
import Home from './Home';
import Projects from './projects';
import { withStyles } from '@material-ui/core/styles';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <AppHeader />
          <AppSidebar />
          <div className="AppContentWrapper">
            <div className="AppContentInnerWrapper">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/projects" component={Projects} />
                <Route path="*" component={NotFound} />
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const NotFound = () => (
  <div className="home-body">Page not FOUND 404..........</div>
);

export default withStyles({ withTheme: true })(App);
