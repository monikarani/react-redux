import React from 'react';
import { BrowserRouter,Switch } from 'react-router-dom';
import AppRoute from './AppRoute';
import { frontLayout } from '../components/Layouts';
import Home from '../containers/Home';
import Login  from "../containers/Login";
const Routers = () => {
	return(
		<BrowserRouter>
			<Switch>
		      <AppRoute
					exact={true}
					path="/"
					component={Home}
					layout={frontLayout}
				/>
				 <AppRoute
					exact={true}
					path="/login"
					component={Login}
					layout={frontLayout}
				/>
	 	    </Switch>
 		</BrowserRouter>
);
}

export default Routers;