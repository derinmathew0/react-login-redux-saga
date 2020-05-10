import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import PrivateRoute from './privateRoute';
import LoginPage from '../components/loginPage';
import TimeSlotPage from '../components/timeSlotPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path='/' exact={true} component={LoginPage} />
            <Route path='/login' component={LoginPage} />
            <PrivateRoute path='/timeslot' component={TimeSlotPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;