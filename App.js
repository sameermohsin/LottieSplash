import React, {useEffect} from 'react';
import {Platform, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import MainScreen from './source/screens/MainScreen';
import {Color} from './source/color/Color';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
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
