jest.useFakeTimers();

import {
  render,
  act,
  waitForElementToBeRemoved,
} from '../../utils/testing-library-utils';
import React from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { NavigationContainer } from '@react-navigation/native';

import AppNavigator from '../../navigation/AppNavigator';


const flushMicrotasksQueue = () =>
  new Promise(resolve => setImmediate(resolve));

beforeEach(async () => {
  await AsyncStorage.clear();
});

test('async works', async () => {
  await AsyncStorage.setItem(
    'userData',
    JSON.stringify({
      expiryDate: '2050-11-22T19:32:49.644Z',
      token:
        'eyJhbGciOiJSUzI1NiIsImtpZCI6IjJlMzZhMWNiZDBiMjE2NjYxOTViZGIxZGZhMDFiNGNkYjAwNzg3OWQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vYnJvZy10cmlwLWpvdXJuYWwiLCJhdWQiOiJicm9nLXRyaXAtam91cm5hbCIsImF1dGhfdGltZSI6MTYzNzYwNTk2OSwidXNlcl9pZCI6ImZMajNSUmNrVzRlUEpFMENWTVpkaHlmTlNEdTIiLCJzdWIiOiJmTGozUlJja1c0ZVBKRTBDVk1aZGh5Zk5TRHUyIiwiaWF0IjoxNjM3NjA1OTY5LCJleHAiOjE2Mzc2MDk1NjksImVtYWlsIjoidGVzdEB0ZXN0LmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0QHRlc3QuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.PhDDGY8vow3BWdPUpLER5qafisxJqzAci5wM6WFBlkBPLZe3sNjHWZrPgb8KJ3qpoqydlV-YADYNaEtNfL-limCMgj2aabGcnI6DLDbgkZ9KUgGpWVIXxXb-r4rCVhdY8sqQYVMZr4jj7be1h69HserhWlyr51QK1F-dB-JtPsoWHJ-tuuBgr97FsTe5MA6O3VYO4HrCjE-mW1x3tvd7Ciolmk20s-_IK59UUIstPeSm73OiRHNKf7fEaN6LH_mNKqP4Eslp2V0P-5AvHrSZBiTbD0KCSWq7jotJRxdHEgM7G7FabQ5TsBUX-3TAPoAlcMdliUzljRxTVODP2Ex-pg',
      userId: 'fLj3RRckW4ePJE0CVMZdhyfNSDu2',
    })
  );

  const result = await AsyncStorage.getItem('userData');

  const parsedResult = JSON.parse(result);

  console.log('parsedResult ', parsedResult);
  expect(parsedResult).toEqual({
    expiryDate: '2050-11-22T19:32:49.644Z',
    token:
      'eyJhbGciOiJSUzI1NiIsImtpZCI6IjJlMzZhMWNiZDBiMjE2NjYxOTViZGIxZGZhMDFiNGNkYjAwNzg3OWQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vYnJvZy10cmlwLWpvdXJuYWwiLCJhdWQiOiJicm9nLXRyaXAtam91cm5hbCIsImF1dGhfdGltZSI6MTYzNzYwNTk2OSwidXNlcl9pZCI6ImZMajNSUmNrVzRlUEpFMENWTVpkaHlmTlNEdTIiLCJzdWIiOiJmTGozUlJja1c0ZVBKRTBDVk1aZGh5Zk5TRHUyIiwiaWF0IjoxNjM3NjA1OTY5LCJleHAiOjE2Mzc2MDk1NjksImVtYWlsIjoidGVzdEB0ZXN0LmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0QHRlc3QuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.PhDDGY8vow3BWdPUpLER5qafisxJqzAci5wM6WFBlkBPLZe3sNjHWZrPgb8KJ3qpoqydlV-YADYNaEtNfL-limCMgj2aabGcnI6DLDbgkZ9KUgGpWVIXxXb-r4rCVhdY8sqQYVMZr4jj7be1h69HserhWlyr51QK1F-dB-JtPsoWHJ-tuuBgr97FsTe5MA6O3VYO4HrCjE-mW1x3tvd7Ciolmk20s-_IK59UUIstPeSm73OiRHNKf7fEaN6LH_mNKqP4Eslp2V0P-5AvHrSZBiTbD0KCSWq7jotJRxdHEgM7G7FabQ5TsBUX-3TAPoAlcMdliUzljRxTVODP2Ex-pg',
    userId: 'fLj3RRckW4ePJE0CVMZdhyfNSDu2',
  });
});

test.only('App auto logs in', async () => {

  await AsyncStorage.setItem(
    'userData',
    JSON.stringify({
      expiryDate: new Date(new Date().getTime() + 1000),
      token:
        'eyJhbGciOiJSUzI1NiIsImtpZCI6IjJlMzZhMWNiZDBiMjE2NjYxOTViZGIxZGZhMDFiNGNkYjAwNzg3OWQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vYnJvZy10cmlwLWpvdXJuYWwiLCJhdWQiOiJicm9nLXRyaXAtam91cm5hbCIsImF1dGhfdGltZSI6MTYzNzYwNTk2OSwidXNlcl9pZCI6ImZMajNSUmNrVzRlUEpFMENWTVpkaHlmTlNEdTIiLCJzdWIiOiJmTGozUlJja1c0ZVBKRTBDVk1aZGh5Zk5TRHUyIiwiaWF0IjoxNjM3NjA1OTY5LCJleHAiOjE2Mzc2MDk1NjksImVtYWlsIjoidGVzdEB0ZXN0LmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0QHRlc3QuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.PhDDGY8vow3BWdPUpLER5qafisxJqzAci5wM6WFBlkBPLZe3sNjHWZrPgb8KJ3qpoqydlV-YADYNaEtNfL-limCMgj2aabGcnI6DLDbgkZ9KUgGpWVIXxXb-r4rCVhdY8sqQYVMZr4jj7be1h69HserhWlyr51QK1F-dB-JtPsoWHJ-tuuBgr97FsTe5MA6O3VYO4HrCjE-mW1x3tvd7Ciolmk20s-_IK59UUIstPeSm73OiRHNKf7fEaN6LH_mNKqP4Eslp2V0P-5AvHrSZBiTbD0KCSWq7jotJRxdHEgM7G7FabQ5TsBUX-3TAPoAlcMdliUzljRxTVODP2Ex-pg',
      userId: 'fLj3RRckW4ePJE0CVMZdhyfNSDu2',
    })
  );
  const component = (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
  const {
    findByText,
    debug,
findByPlaceholderText,
    queryByPlaceholderText,
  } = render(component);

  const result = await AsyncStorage.getItem('userData');
  const parsedResult = JSON.parse(result);
  console.log('parsedResult ', parsedResult);

  await act(flushMicrotasksQueue);

  const result2 = await AsyncStorage.getItem('userData');
  const parsedResult2 = JSON.parse(result2);
  console.log('parsedResult2 ', parsedResult2);

  await findByPlaceholderText('Email');

  await waitForElementToBeRemoved(() => queryByPlaceholderText('Email'));

  debug('debug fired');

  await findByText('Hello World');

});
