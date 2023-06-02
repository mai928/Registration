import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {globalStyle} from '../utils/globalStyle';

const SuccessPassword = ({navigation}) => {

  const item = {
    whatsapp: require('../../../../assets/Group16353.png'),
    call: require('../../../../assets/call_black.png'),
    Check: require('../../../../assets/Success.png'),
  };
  return (
    <View style={{flex: 1}}>
      <View style={{...globalStyle.imgContainer}}>
        <Image style={{...globalStyle.img}} source={item.call} />
        <Image style={{...globalStyle.img}} source={item.whatsapp} />
      </View>

      <View style={{...globalStyle.innerContainer, flex: 1}}>
        <Image style={{width: 70, height: 70}} source={item.Check} />
        <Text style={{...globalStyle.Header, color: '#374151'}}>Success</Text>
        <Text style={styles.title}>
          Congratulations your password has been changed
        </Text>
        <TouchableOpacity onPress={()=>navigation.navigate('SiginIn')} style={{...globalStyle.submitValid}}>
          <Text style={{...globalStyle.TextSubmit}}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SuccessPassword;

const styles = StyleSheet.create({
  title: {
    ...globalStyle.details,
    fontSize: 16,
    marginHorizontal: 45.5,
    paddingHorizontal: 20,
    textAlign: 'center',
    marginBottom: 28,
    lineHeight:23,
    color:'#6B7280'
  },

});
