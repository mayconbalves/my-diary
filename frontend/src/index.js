import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root'
import store from './store/store.dev'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />
    <Root store={store} />
  </React.Fragment> , document.getElementById('root'))


