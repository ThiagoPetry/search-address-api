import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Consult from '../Consult/index';
import Info from '../Info/index';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Consult} />
    <Route path="/info/:cep+" exact component={Info} />
  </Switch>
);

export default Routes;
