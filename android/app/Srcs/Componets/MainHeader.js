import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { globalStyle } from '../utils/globalStyle';

const MainHeader = () => {
  const item = {
    whatsapp: require('../../../../assets/Group16353.png'),
    call: require('../../../../assets/call_black.png'),
    logo: require('../../../../assets/Logo.png'),
    facebook: require('../../../../assets/facebook.png'),
    google: require('../../../../assets/Google.png'),
    apple: require('../../../../assets/apple-logo.png'),
  };
  return (
    <View style={{paddingTop:10}}>
      <View style={{...globalStyle.imgContainer}}>
        <Image style={{...globalStyle.img}} source={item.call} />
        <Image style={{...globalStyle.img}} source={item.whatsapp} />
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Image source={item.logo} />
      </View>
    </View>
  );
};

export default MainHeader;

