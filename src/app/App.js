import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import {Home} from "./components/Home";

class App extends Component {
  render() {
    return (
        <Router>
            <Route path={'/home'} component={Home}/>
        </Router>
    );
  }
}

export default App;
