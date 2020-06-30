import React from 'react';  
import { Redirect, Route } from 'react-router-dom';
import { checkCookie } from './app/common/utils/cookies';

const PrivateRoute = ({ component: Component, ...rest }) => (  
  <Route { ...rest } render={props => (
    checkCookie() !== null ? (
      <Component { ...props } />
    ) : (
      <Redirect to={{
          pathname: '/',
          state: { from: props.location }
        }}
      />
    )
  )} />
);

export default PrivateRoute;