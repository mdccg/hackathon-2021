import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './../components/Header';

import Home from './../pages/Home';
import Sobre  from './../pages/Sobre';
import Municipio from './../pages/Municipio';

const routes = () => (
  <BrowserRouter>
    <Header />

    <Switch>
      <Route exact path="/"           component={Home} />
      <Route exact path="/sobre-nos"  component={Sobre} />
      <Route exact path="/aquidauana" component={Municipio} />
    </Switch>
  </BrowserRouter>
);

export default routes;