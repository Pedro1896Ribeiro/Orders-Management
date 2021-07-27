LogBox.ignoreLogs(['Setting a timer']);
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { LogBox } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import MainNavigation from './src/navigation/MainNavigation';
import { UserProvider } from './src/contexts/UserContext';

export default () => {
  return (
    <UserProvider>
      <NavigationContainer>
        <StatusBar style="light" />
        <MainNavigation />
      </NavigationContainer>
    </UserProvider>
  );
};
