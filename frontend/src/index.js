import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root'
import store from './store/store.dev'

ReactDOM.render(<Root store={store} />, document.getElementById('root'))


