import React from 'react';
import { Route, Router, IndexRoute } from 'react-router';

import Hello from './components/hello';
import Things from './components/things';

const Routes = (
  <Router>
    <Route path="/" >
      <IndexRoute component={Hello} />
      <Route path="/things" component={Things} />
    </Route>
  </Router>
);

export default Routes;
