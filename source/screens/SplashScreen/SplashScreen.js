import React from 'react';
import {View, SafeAreaView} from 'react-native';
import LottieView from 'lottie-react-native';
import {Color} from '../../color/Color';

const SplashScreen = ({navigation}) => {
  if (loading) {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: Color.white,
          }}>
          <LottieView
            source={require('../../assets/moon.json')}
            autoPlay
            loop
            speed={5}
          />
        </View>
      </SafeAreaView>
    );
  }
};

export default SplashScreen;
