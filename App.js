import React from 'react';
import {Platform, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainScreen from './source/screens/MainScreen';
import {Color} from './source/color/Color';

const App = () => {
  return (
    <NavigationContainer>
      {Platform.OS === 'android' ? (
        <StatusBar
          backgroundColor={Color.primaryColor}
          barStyle="light-content"
        />
      ) : (
        <StatusBar hidden />
      )}
      <MainScreen />
    </NavigationContainer>
  );
};

export default App;
