import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './components/landingPage';
import BaseLayout from './components/baseLayout';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <BaseLayout>
       <Switch>
        <Route exact path="/" component={LandingPage}/>
      </Switch>
      </BaseLayout>
    </BrowserRouter>
    );
  }
}

export default App;
