import Loadable from 'react-loadable';
import React from 'react';

const LoadableComponent = Loadable({
  loader: () => import('./'),
  loading() {
      return <div>Loading...</div>
  }
});

const LoadableFunction = () => <LoadableComponent/>

export default LoadableFunction;