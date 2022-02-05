import React from 'react';
import {View, SafeAreaView} from 'react-native';
import LottieView from 'lottie-react-native';
import {Color} from '../../color/Color';

const SplashScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: Color.primaryColor,
        }}>
        <LottieView
          source={require('../../assets/animation1.json')}
          autoPlay
          loop={false}
          onAnimationFinish={() => navigation.replace('Home')}
          speed={2}
        />
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;
