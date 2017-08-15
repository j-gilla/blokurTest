import React, { Component } from 'react';
import { render } from 'react-dom';

import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';

class Root extends Component {
  render(){
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={} />
          <Route path ="/" component={} />
          <Route path ="/" component={} />
        </Switch>
      </Router>
    )
  }
}

const rootElement = document.getElementById('root');
render(<Root />, rootElement);
