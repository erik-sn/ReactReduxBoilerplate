import React from 'react';
import { Route, Router, IndexRoute } from 'react-router';

import Hello from './components/hello';

const Routes = ( 
  <Router>
    <Route path="/" >
      <IndexRoute component={ Hello } />
    </Route>
  </Router>
)

export default Routes;