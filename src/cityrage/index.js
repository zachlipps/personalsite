import React from 'react';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers/index';
import initialState from './initial-state';
import Application from './containers/ApplicationContainer';

import { startListeningToAuthChanges } from './actions/auth';
import { showOnlineUsersAction, startListeningForUsers } from './actions/users';
import { startListeningGameChanges } from './actions/game';


const middleware = [thunk];
const enhancers = [];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancers(
    applyMiddleware(...middleware),
    ...enhancers,
  ),
);


store.dispatch(startListeningToAuthChanges());
store.dispatch(startListeningForUsers());
store.dispatch(showOnlineUsersAction());
store.dispatch(startListeningGameChanges());

export const CityRage = () => {
  return (
    <Provider store={store}>
      <Application />
    </Provider>
  );
}

