import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';

import AppNavigator from './navigation/AppNavigator';
import authReducer from './store/reducers/auth-reducer';

const rootReducer = combineReducers({
  auth: authReducer,
});

export const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
