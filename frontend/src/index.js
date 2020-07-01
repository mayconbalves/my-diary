import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root'
import store from './store/store.dev'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    background-color: rgba(249, 239, 220, 1);
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
  }
`

ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />
    <Root store={store} />
  </React.Fragment> , document.getElementById('root'))


