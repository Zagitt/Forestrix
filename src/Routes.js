import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Ficha from './pages/Ficha';
import Parcela from './pages/Parcela';
import InventoryList from './pages/inventories-list';
import Inventory from './pages/inventory';
import Classify from './pages/Classify';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Login from './pages/login';

export default ({ childProps }) =>
  <Switch>
    <Route path="/login" exact component={Login} props={childProps} />
    <Route exact path={["/", "/inventarios"]} component={InventoryList} />
    <Route path="/restaurants/:id" render={(props) => (<Inventory {...props} />)}/>
    <Route path="/identificar" exact component={Classify} props={childProps} />
    <Route path="/about" exact component={About} props={childProps} />
    <Route path="/ficha" exact component={Ficha} props={childProps} />
    <Route component={NotFound} />
  </Switch>;
