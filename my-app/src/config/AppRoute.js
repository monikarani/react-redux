/*
 * @file: AppRoute.js
 * @description: Defined all routers
 * @date: 29 Oct 2018
 * @author: Monika Rani
*/

/************ React Pages according to layouts  *****************/

import React from 'react';
import { Route } from 'react-router-dom';

const AppRoute = ({
  component: Component,
  layout:Layout,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => {
      return (
        <Layout>
          <Component {...props} />
        </Layout>
      );
    }}
  />
);

export default AppRoute;
