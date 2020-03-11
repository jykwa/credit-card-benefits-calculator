import React from 'react';
import './App.scss';

import MileageCredit from './components/tables/MileageCreditTable/MileageCreditTable';
import BenefitsForm from './components/forms/BenefitsForm';

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
      <BenefitsForm />
      <MileageCredit></MileageCredit>
    </div>
  </div>
);

export default App;
