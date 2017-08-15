import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk        from 'redux-thunk';
import { Provider } from 'react-redux';

import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';

import reducer from './reducers';
import App     from './components/App.jsx';
import Login   from './components/Login.jsx';
import User    from './components/User.jsx';
import Error   from './components/Error.jsx';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)


const store = createStoreWithMiddleware(reducer)

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/' component={App} />
          <Route path ='/login' component={Login} />
          <Route path ='/user/:accessToken/:refreshToken' component={User} />
          <Route path ='/error/:errorMsg' component={Error} />
        </Switch>
      </Router>
    </Provider>
  );
  }
}

const rootElement = document.getElementById('root');
render(<Root />, rootElement);
