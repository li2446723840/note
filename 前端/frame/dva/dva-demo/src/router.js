import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/indexPage/IndexPage';
import Product from './routes/product/Product';
import NewCase from './routes/newCase/NewCase';

function RouterConfig({ history }) {
  return (
    <Router history={ history }>
      <Switch>
        <Route path="/" exact component={ IndexPage } />
        <Route path="/product" component={ Product } />
        <Route path="/newCase" component={ NewCase } />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
