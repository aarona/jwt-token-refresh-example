import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Protected } from './pages/Protected'
import { Header } from './components/Header';

export const Routes: React.FC = () => {
  return <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/protected" component={Protected} />
      </Switch>
    </div>
  </BrowserRouter>
}

export default Routes;
