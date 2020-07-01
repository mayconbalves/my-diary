import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import HomeContainer from './containers/home/index'
import AnotationContainer from './containers/anotations/index'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path='/' component={HomeContainer} />
        <Route exact path='/anotations' component={AnotationContainer} />
      </Switch>
    </Router>
  </Provider>
)

Root.prototypes = {
  store: PropTypes.object.isRequired
}

export default Root