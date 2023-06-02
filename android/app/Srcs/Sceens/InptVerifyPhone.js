import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MainHeader from '../Componets/MainHeader';
import { globalStyle } from '../utils/globalStyle';
import { useNavigation } from '@react-navigation/native';

const InptVerifyPhone = () => {
  const navigation =useNavigation()

  return(
  <View>
      <MainHeader />

      <View style={{...globalStyle.innerContainer}}>
        <Text style={{...globalStyle.Header}}>Verify Account</Text>
        <Text style={styles.title}>
        Please enter the verification code we sent To your Phone number 071*****12
        </Text>
        <View style={{flexDirection: 'row'}}>
          <TextInput style={styles.SmallInpt} />
          <TextInput style={styles.SmallInpt} />
          <TextInput style={styles.SmallInpt} />
          <TextInput style={styles.SmallInpt} />
          <TextInput style={styles.SmallInpt} />
          <TextInput style={styles.SmallInpt} />
        </View>

        <TouchableOpacity
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
  )
};

export default InptVerifyPhone;

const styles = StyleSheet.create({
  SmallInpt: {
    ...globalStyle.inpt,
    width: 40,
    height: 58,
    marginHorizontal: 5,
  },
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
