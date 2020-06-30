import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import HomeContainer from './containers/home/index'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path='/' component={HomeContainer} />
      </Switch>
    </Router>
  </Provider>
)

Root.prototypes = {
  store: PropTypes.object.isRequired
}

export default Root