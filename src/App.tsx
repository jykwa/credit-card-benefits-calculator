import React from 'react';
import './App.scss';

import MileageCredit from './components/tables/MileageCreditTable/MileageCreditTable';
import BenefitsFormContainer from './components/forms/BenefitsFormContainer';

import Header from './components/Header/Header';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';

const App = () => (
  <div className='App'>
    <Header />
    <Switch>
      <Route exact path='/home' component={Home} />
    </Switch>
    <div className='edges'>
      <BenefitsFormContainer />
      <MileageCredit></MileageCredit>
    </div>
  </div>
);

export default App;
