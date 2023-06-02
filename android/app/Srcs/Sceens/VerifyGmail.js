import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import MainHeader from '../Componets/MainHeader';
import {globalStyle} from '../utils/globalStyle';
import { useNavigation } from '@react-navigation/native';

const VerifyGmail = () => {
  const navigation =useNavigation()
  const item = {
    mail: require('../../../../assets/mark_email2.png'),
  };
  return (
    <View style={{flex: 1}}>
      <MainHeader />
      <View style={{...globalStyle.innerContainer, flex: 0.7}}>
        <Image style={{width: 90, height: 90}} source={item.mail} />
        <Text style={{...globalStyle.Header, color: '#374151'}}>
          Verify Account
        </Text>
        <Text style={styles.title}>
          Please enter the verification code we sent To your Email address{'\n'}
          eng.*****@gmail.com
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('InptverifyGmail')}
          style={{...globalStyle.submitValid, marginBottom: 10}}>
          <Text style={{...globalStyle.TextSubmit}}>Continue</Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Text style={{paddingHorizontal: 80}}>Resent code</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Text style={{paddingHorizontal: 80}}>Change Email</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default VerifyGmail;

const styles = StyleSheet.create({
  title: {
    ...globalStyle.details,
    fontSize: 13,
    // fontWeight:'900',
    marginHorizontal: 56,
    paddingHorizontal: 10,
    textAlign: 'center',
    marginBottom: 28,
  },
});
