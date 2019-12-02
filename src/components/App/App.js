import React from 'react';
import styles from './App.scss';
import Home from '../Home/HomeContainer';
import Info from '../Info/InfoContainer';
import Faq from '../FAQ/FaqContainer';
import { BrowserRouter, Route } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import Header from '../Header/Header';
import {AnimatedSwitch} from 'react-router-transition';
import List from '../List/ListContainer';
import SearchResults from '../SearchResults/SearchResultsContainer';

const App = () => (
  <MainLayout>
    <BrowserRouter>
      <Header />
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className={styles.switchWrapper}
      >
        <Route exact path='/' component={Home} />
        <Route exact path='/info' component={Info} />
        <Route exact path='/faq' component={Faq} />
        <Route exact path='/list/:id' component={List} />
        <Route exact path='/search/:searchString' component={SearchResults} />
      </AnimatedSwitch>
    </BrowserRouter>
  </MainLayout>
);

export default App;