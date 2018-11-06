import React from 'react';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { PersistGate } from 'redux-persist/es/integration/react';
import Routers from './Routers';
import configureStore from './configureStore';
export const history = createHistory();

/************ store configration *********/
const { persistor, store } = configureStore(history);

export default () => {
	return (
      <div className="App">
      	<Provider store={store}>
      		<PersistGate persistor={persistor}>
      	   			<Routers store={store} history={history} />
      	   	</PersistGate>
      	</Provider>
      </div>
);
};