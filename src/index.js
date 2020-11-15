import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/home';
import CreatePagebuilder from './pages/create-pagebuilder';
import Commands from './pages/commands';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/CreatePagebuilder" component={CreatePagebuilder} exact />
      <Route path="/Editor" component={Commands} exact />
      <Route component={() => (<div>Página 404</div>)} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);

