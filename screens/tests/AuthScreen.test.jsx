jest.useFakeTimers();
import {
  render,
  fireEvent,
  waitForElementToBeRemoved,
} from '../../utils/testing-library-utils';
import React from 'react';


import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from '../../navigation/AppNavigator';


const flushMicrotasksQueue = () =>
  new Promise(resolve => setImmediate(resolve));



test('App logs in', async () => {

  
  const component = (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
  const {
    getByText,
    findByText,
    debug

  } = render(component);


  const login = getByText('login');
  fireEvent.press(login)


debug()

  await findByText('Hello World');

});
