import React from 'react';
import {StyleSheet, Text, View, Dimensions, SafeAreaView} from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.heading}>Home</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
