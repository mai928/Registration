import {
  Text,
  Image,
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import MainHeader from '../Componets/MainHeader';
import {globalStyle} from '../utils/globalStyle';
import {Formik} from 'formik';
import * as yup from 'yup';
import {useNavigation} from '@react-navigation/native';

const ForgetPassword = () => {
  const navigation = useNavigation();
  return (
    <Formik
      initialValues={{email: ''}}
      onSubmit={values => {console.log(values) ,navigation.navigate('CheckToCreatePassword')}}
      validationSchema={yup.object().shape({
        email: yup.string().required('Is Required'),
      })}>
      {({
        handleChange,
        handleBlur,
        values,
        isValid,
        handleSubmit,
        errors,
      }) => (
        <View
          style={styles.container}>
          <StatusBar hidden />

          <MainHeader />

          <View style={{...globalStyle.innerContainer, marginBottom: 69}}>
            <Text style={{...globalStyle.Header}}>Forget Password</Text>
            <Text style={{...globalStyle.details, marginBottom: 20}}>
              Enter your registered email below
            </Text>

            <TextInput
            enablesReturnKeyAutomatically
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            placeholder="Your email"
            style={{...globalStyle.inpt}}
          />
            {errors.email && 
              <Text style={{fontSize: 12, color: '#FF0D10', fontWeight: '500'}}>
                {errors.email}
              </Text>
            }

            <View
              style={{flexDirection: 'row', marginBottom: 26, marginTop: 47}}>
              <Text style={{...globalStyle.DontHaveAccont}}>
                Remember the password?
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('SiginIn')}>
                <Text style={{...globalStyle.SignBtn}}> Sign in</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity   
             style={!isValid ? styles.unValidBtn : styles.LoginBtn}
              onPress={handleSubmit}
              disabled={!isValid}>
              <Text style={styles.textSubmit}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    paddingHorizontal: 15,
  },

  buttonSubmit: {
    backgroundColor: '#BEBEBE',
    width: 334,
    height: 48,
    borderRadius: 10,
    marginTop: 33,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textSubmit: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },

  LoginBtn: {
    backgroundColor: '#E9D023',
    width: 334,
    height: 48,
    borderRadius: 10,
    marginTop: 33,
    alignItems: 'center',
    justifyContent: 'center',
  },
  unValidBtn: {
    backgroundColor: '#BEBEBE',
    width: 334,
    height: 48,
    borderRadius: 10,
    marginTop: 33,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
