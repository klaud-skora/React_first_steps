import React from 'react';
import Home from '../Home/HomeContainer';
import Info from '../Info/InfoContainer';
import Faq from '../FAQ/FaqContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import Header from '../Header/Header';

const App = () => (
  <MainLayout>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/info' component={Info} />
        <Route exact path='/faq' component={Faq} />
      </Switch>
    </BrowserRouter>
  </MainLayout>
);

export default App;