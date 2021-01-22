import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './style';
import { GlobalStyleIcon } from './statics/iconfont/iconfont';

const newApp = (
  <Fragment>
    <App />
    <GlobalStyle/>
    <GlobalStyleIcon/>
  </Fragment>
);

ReactDOM.render(
  newApp,
  document.getElementById('root')
);

