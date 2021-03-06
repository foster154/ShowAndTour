import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import reduxThunk from 'redux-thunk'

import App from './components/App'
import RequireAuth from './components/auth/RequireAuth'
import Signup from './components/auth/Signup'
import Signin from './components/auth/Signin'
import Signout from './components/auth/Signout'
import Welcome from './components/Welcome'
import Dashboard from './components/Dashboard/Dashboard'
import reducers from './reducers'
import { AUTH_USER } from './actions/types'

// App-wide styles
require('./styles/styles.scss')

// const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)
// const store = createStoreWithMiddleware(reducers)

let store = createStore(reducers, compose(
  applyMiddleware(reduxThunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
))

const token = window.localStorage.getItem('token')
// If a token exists, consider the user to be signed in.
if (token) {
  store.dispatch({ type: AUTH_USER })
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Welcome} />
        <Route path='signin' component={Signin} />
        <Route path='signup' component={Signup} />
        <Route path='signout' component={Signout} />
        <Route path='dashboard' component={RequireAuth(Dashboard)} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('#root'))
