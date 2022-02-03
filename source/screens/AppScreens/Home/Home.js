import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  ScrollView,
  FlatList,
} from 'react-native';
import {Color} from '../../../color/Color';
import Header from '../../../components/Header';
import AboutView from '../About/AboutView';
import ServiceView from '../Services/ServiceView';
import GalleryView from '../Gallery/GalleryView';
import HeaderTitle from '../../../components/HeaderTitle';
import TitleLine from '../../../components/TitleLine';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

function renderAbout() {
  return (
    <View>
      <AboutView />
    </View>
  );
}
function renderService() {
  return (
    <View>
      <ServiceView />
    </View>
  );
}
function renderGallery() {
  return (
    <View>
      <GalleryView />
    </View>
  );
}

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        source={require('../../../assets/backgroundOpactity.png')}
        style={{width: WIDTH, height: HEIGHT}}>
        <Header navigation={navigation} value={false} />
        <View style={{flex: 1}}>
          {/* <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{alignItems: 'center'}}>
              <HeaderTitle title="Home" textColor={Color.primaryColor} />
              <TitleLine />
            </View>
            {renderAbout()}
          </ScrollView> */}
          <FlatList
            keyExtractor={(x, i) => i.toString()}
            ListHeaderComponent={
              <View>
                <HeaderTitle title="Home" textColor={Color.primaryColor} />
                <TitleLine />
              </View>
            }
            ListFooterComponent={
              <View style={{flex: 1}}>
                {renderAbout()}
                {renderService()}
                {renderGallery()}
              </View>
            }
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <View style={{alignItems: 'center'}}>
                  {/* <HeaderTitle title="Home" textColor={Color.primaryColor} />
                  <TitleLine /> */}
                </View>
              );
            }}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
