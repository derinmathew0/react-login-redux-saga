import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import PrivateRoute from './privateRoute';
import Login from './app/login/login';
import TimeSlot from './app/timeslot/timeSlot';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path='/' exact={true} component={Login} />
            <Route path='/login' component={Login} />
            <PrivateRoute path='/timeslot' component={TimeSlot} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;