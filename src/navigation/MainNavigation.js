import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Preload from '../screens/Preload';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import CodeVerification from '../screens/CodeVerification';
import BottomTabNavigation from './BottomTabNavigation';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    initialRouteName="Preload"
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="Preload" component={Preload} />
    <Stack.Screen name="SignIn" component={SignIn} />
    <Stack.Screen name="SignUp" component={SignUp} />
    <Stack.Screen name="CodeVerification" component={CodeVerification} />
    <Stack.Screen name="BottomTabNavigation" component={BottomTabNavigation} />
  </Stack.Navigator>
);
