import React, {useContext, useEffect, useState} from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
import {globalStyle} from '../utils/globalStyle';
import * as yup from 'yup';
import {Formik} from 'formik';
import Eye from 'react-native-vector-icons/MaterialCommunityIcons';
import MainHeader from '../Componets/MainHeader';
import {Context} from '../Auth/context';
import Terms from '../Componets/Terms';
const SignIn = ({navigation}) => {
  const {Login} = useContext(Context);
  const item = {
    whatsapp: require('../../../../assets/Group16353.png'),
    call: require('../../../../assets/call_black.png'),
    logo: require('../../../../assets/Logo.png'),
    facebook: require('../../../../assets/facebook.png'),
    google: require('../../../../assets/Google.png'),
    apple: require('../../../../assets/apple-logo.png'),
  };

  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [rightIcon, setRightIcon] = useState('eye');

  const handlePasswordVisibility = () => {
    if (rightIcon === 'eye') {
      setRightIcon('eye-off');
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === 'eye-off') {
      setRightIcon('eye');
      setPasswordVisibility(!passwordVisibility);
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <StatusBar hidden />

      <MainHeader />

      <View style={{...globalStyle.innerContainer, marginBottom: 69}}>
        <Text style={{...globalStyle.Header}}>Login</Text>
        <Text style={{...globalStyle.details}}>Add your details to login</Text>

        <Formik
          initialValues={{email: '', password: ''}}
          onSubmit={values => {Login(values)}}
          validationSchema={yup.object().shape({
            email: yup.string().required('Is Required'),
            password: yup.string().required('Is Required'),
          })}>
          {({
            handleChange,
            handleBlur,
            values,
            isValid,
            touched,
            handleSubmit,
            setFieldTouched,
            errors,
          }) => (
            <View>
              <TextInput
                onChangeText={handleChange('email')}
                onBlur={() => setFieldTouched('email')}
                value={values.email}
                style={{...globalStyle.inpt}}
                placeholder="Your Email"
              />
              {touched.email && errors.email && (
                <Text
                  style={{fontSize: 12, color: '#FF0D10', fontWeight: '500'}}>
                  {errors.email}
                </Text>
              )}
              <View>
                <TextInput
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry={passwordVisibility}
                  style={{...globalStyle.inpt}}
                  placeholder="Password"
                />
                <Eye
                  onPress={handlePasswordVisibility}
                  style={{position: 'absolute', right: 28, bottom: 10}}
                  name={rightIcon}
                  color="#BEBEBE"
                  size={25}
                />
              </View>

              {touched.password && errors.password && (
                <Text
                  style={{fontSize: 12, color: '#FF0D10', fontWeight: '500'}}>
                  {errors.password}
                </Text>
              )}

              <TouchableOpacity
                disabled={!isValid}
                onPress={handleSubmit}
                style={
                  isValid
                    ? {...globalStyle.submitValid}
                    : {...globalStyle.submitValid, ...globalStyle.unValidColor}
                }>
                <Text style={{...globalStyle.TextSubmit}}>Login</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>

        <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')}>
          <Text style={styles.forgetPass}>Forgot your password?</Text>
        </TouchableOpacity>
        <Text style={styles.OrLogin}>or Login With</Text>

        <TouchableOpacity style={[styles.buttonContainer, styles.faceBtn]}>
          <Image source={item.facebook} />

          <Text style={[styles.socialFont ,styles.faceBtn]}>Login with Facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.buttonContainer, styles.googleBtn]}>
          <Image source={item.google} />

          <Text style={[styles.socialFont ,styles.googleBtn]}>Login with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.buttonContainer, styles.appleBtn ]}>
          <Image source={item.apple} />

          <Text style={styles.socialFont}>Login with Apple</Text>
        </TouchableOpacity>

        <View style={{flexDirection: 'row', marginBottom: 26, marginTop: 47}}>
          <Text style={{...globalStyle.DontHaveAccont}}>Don't have an Account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SiginUp')}>
            <Text style={{...globalStyle.SignBtn}}> Sign Up</Text>
          </TouchableOpacity>
        </View>

        <Terms />
      </View>
    </ScrollView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    marginHorizontal: 15,
  },
  forgetPass: {
    fontSize: 13,
    fontWeight: '500',
    marginTop: 42,
    color: '#474746',
    opacity: 1,
  },
  OrLogin: {
    marginTop: 42,
    marginBottom: 20,
    fontWeight: '500',
    fontSize: 13,
    color: '#7C7D7E',
    opacity: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 10,
    opacity: 1,
    width: 334,
    height: 48,
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
socialFont:{
  fontSize: 13,
  fontWeight: '600',
  paddingStart: 20,
},

  faceBtn: {
    borderColor: '#5D98CC',
    color: '#5D98CC',
  },
  googleBtn: {
    color: '#C12F2F',
    borderColor: '#C12F2F',

  },
  appleBtn: {
    color: '#474746',
  },

});
