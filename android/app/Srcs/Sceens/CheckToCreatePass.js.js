import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {globalStyle} from '../utils/globalStyle';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const CheckToCreatePassword = () => {
  const navigation =useNavigation()
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
        <Image style={{width: 90, height: 90}} source={item.Check} />
        <Text style={{...globalStyle.Header, color: '#374151'}}>Success</Text>
        <Text style={styles.title}>
          Please check your email to create a new password
        </Text>

        <TouchableOpacity  onPress={()=>navigation.goBack()} style={{flexDirection:'row'}} >
         <Text style={styles.Resubmit}>Can't get email? </Text> 
          <Text style={[styles.Resubmit,{color:'#32B768'}]}>Resubmit</Text>
           </TouchableOpacity>
        
         <TouchableOpacity onPress={()=>navigation.navigate('ChangePassword')}
         style={{...globalStyle.submitValid}}>
          <Text style={{...globalStyle.TextSubmit}}>Check your email</Text>
         </TouchableOpacity>
      </View>
    </View>
  );
};

export default CheckToCreatePassword;

const styles = StyleSheet.create({
  title: {
    ...globalStyle.details,
    fontSize: 16,
    marginHorizontal: 45.5,
    paddingHorizontal: 30,
    textAlign: 'center',
    marginBottom:28
  },
  Resubmit:{
    fontSize:16,
    fontWeight:'900',
    color:'#6B7280',
    // marginBottom:30
  }
});
