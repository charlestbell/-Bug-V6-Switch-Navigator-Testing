import React from 'react';
import {
  Text,
  View,
  Button,
} from 'react-native';
import {useDispatch} from 'react-redux'




const AuthScreen = ()=> {
const dispatch = useDispatch()

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems:'center' }}>
      <Text>AuthScreen</Text>
      <Button title="login" onPress={()=> dispatch({type: 'AUTHENTICATE'})} />
    </View>
  );
};

export default AuthScreen;
