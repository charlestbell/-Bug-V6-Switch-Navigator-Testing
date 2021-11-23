import React from 'react';
import { useSelector } from 'react-redux';

import AuthScreen from '../screens/AuthScreen';
import TestScreen from '../screens/TestScreen';

const AppNavigator = () => {
  const isAuth = useSelector(state => state.auth.isAuth);

  return (
    <>
      {isAuth && <TestScreen />}
      {!isAuth && <AuthScreen />}
    </>
  );
};

export default AppNavigator;
