import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Consult from '../Consult/index';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Consult} />
  </Switch>
);

export default Routes;
