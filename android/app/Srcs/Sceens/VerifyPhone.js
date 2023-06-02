import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { globalStyle } from '../utils/globalStyle';
import MainHeader from '../Componets/MainHeader';
import { useNavigation } from '@react-navigation/native';

const VerifyPhone = () => {
  const navigation =useNavigation()

    const item = {
        phone: require('../../../../assets/call_black2.png'),
      };
      return (
        <View style={{flex: 1 }}>
          <MainHeader/>
          <View style={{...globalStyle.innerContainer, flex:0.7}}>
            <Image style={{width: 90, height: 90}} source={item.phone} />
            <Text style={{...globalStyle.Header, color: '#374151'}}>
              Verify Account
            </Text>
            <Text style={styles.title}>
            Please enter the verification code we sent To your Phone number 071*****12
            </Text>
            <TouchableOpacity onPress={()=>navigation.navigate('InptVerifyPhone')} style={{...globalStyle.submitValid ,marginBottom:10}}>
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
        )
}

export default VerifyPhone

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
})