import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import React, {useContext, useState} from 'react';
import Check from 'react-native-vector-icons/Ionicons';
import Square from 'react-native-vector-icons/Ionicons';
import * as yup from 'yup';
import {Formik} from 'formik';
import {Context} from '../Auth/context';
import {useNavigation} from '@react-navigation/native';
import {globalStyle} from '../utils/globalStyle';
import Terms from './Terms';

const PersonalForm = () => {
  const navigation = useNavigation();

  const {SignUp} = useContext(Context);

  const ValidationSchema = yup.object().shape({
    firstName: yup.string().required(' is Required'),
    lastName: yup.string().required(' is Required'),
    email: yup.string().required(' is Required'),
    phoneNumber: yup.number().required(' is Required'),
    password: yup.string().required(' is Required'),
    Repassword: yup.string().required(' is Required').oneOf([yup.ref('password')],'Both password need to be the same')
  });

  const [checked, setChecked] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);

  const SavePaaaword = () => {
    setChecked(prevState => !prevState);
  };

  initialInfo = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    Repassword: '',
  };

  return (
    <View style={styles.Container}>
      <Formik
        initialValues={{...initialInfo}}
        onSubmit={values =>{ SignUp(values,navigation.navigate('VerifyGmail'))}}
        validationSchema={ValidationSchema}>
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          isValid,
          touched,
          setFieldTouched,
          errors,
        }) => (
          <View>
            <View style={{...globalStyle.innerContainer}}>
              <TextInput
                onChangeText={handleChange('firstName')}
                onBlur={() => setFieldTouched('firstName')}
                value={values.firstName}
                style={{...globalStyle.inpt}}
                placeholder="First Name"
              />
              {touched.firstName && errors.firstName && (
                <Text
                  style={{
                    fontSize: 12,
                    color: '#FF0D10',
                    fontWeight: '500',
                    alignSelf: 'flex-start',
                    marginStart: 30,
                  }}>
                  {errors.firstName}
                </Text>
              )}
              <TextInput
                onChangeText={handleChange('lastName')}
                onBlur={() => setFieldTouched('lastName')}
                value={values.lastName}
                style={{...globalStyle.inpt}}
                placeholder="Last Name"
              />
              {touched.lastName && errors.lastName && (
                <Text
                  style={{
                    fontSize: 12,
                    color: '#FF0D10',
                    fontWeight: '500',
                    alignSelf: 'flex-start',
                    marginStart: 30,
                  }}>
                  {errors.lastName}
                </Text>
              )}
              <TextInput
                onChangeText={handleChange('email')}
                onBlur={() => setFieldTouched('email')}
                value={values.email}
                style={{...globalStyle.inpt}}
                placeholder="Your Email"
              />
              {touched.email && errors.email && (
                <Text
                  style={{
                    fontSize: 12,
                    color: '#FF0D10',
                    fontWeight: '500',
                    alignSelf: 'flex-start',
                    marginStart: 30,
                  }}>
                  {errors.email}
                </Text>
              )}

              <TextInput
                keyboardType={'phone-pad'}
                onChangeText={handleChange('phoneNumber')}
                onBlur={() => setFieldTouched('phoneNumber')}
                value={values.phoneNumber}
                placeholder="Phone Number"
                style={{...globalStyle.inpt}}
              />
              {touched.phoneNumber && errors.phoneNumber && (
                <Text
                  style={{
                    fontSize: 12,
                    color: '#FF0D10',
                    fontWeight: '500',
                    alignSelf: 'flex-start',
                    marginStart: 30,
                  }}>
                  {errors.phoneNumber}
                </Text>
              )}

              <TextInput
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                style={{...globalStyle.inpt}}
                placeholder="Password"
              />
              {touched.password && errors.password && (
                <Text
                  style={{
                    fontSize: 12,
                    color: '#FF0D10',
                    fontWeight: '500',
                    alignSelf: 'flex-start',
                    marginStart: 30,
                  }}>
                  {errors.password}
                </Text>
              )}
              <TextInput
                onChangeText={handleChange('Repassword')}
                onBlur={handleBlur('Repassword')}
                value={values.Repassword}
                style={{...globalStyle.inpt}}
                placeholder="Repassword"
              />
              {touched.Repassword && errors.Repassword && (
                <Text
                  style={{
                    fontSize: 12,
                    color: '#FF0D10',
                    fontWeight: '500',
                    alignSelf: 'flex-start',
                    marginStart: 30,
                  }}>
                  {errors.Repassword}
                </Text>
              )}
            </View>

            <TouchableOpacity
              onPress={SavePaaaword}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 16,
                marginStart: 28,
              }}>
              <Check
                name="checkbox"
                size={25}
                color="#A19E9E"
                style={checked && {color: '#E9D023'}}
              />
              <Text style={styles.savePass}> Save passwoed</Text>
            </TouchableOpacity>

            <View style={{...globalStyle.innerContainer}}>
              <TouchableOpacity
                disabled={!isValid}
                onPress={handleSubmit}
                style={
                  isValid
                    ? {...globalStyle.submitValid}
                    : {...globalStyle.submitValid, ...globalStyle.unValidColor}
                }>
                <Text style={{...globalStyle.TextSubmit}}>Create account</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Formik>
      <View
        style={{
          flexDirection: 'row',
          marginBottom: 26,
          marginTop: 32,
          marginStart: 28,
        }}>
        <Text style={{...globalStyle.DontHaveAccont}}>
          Already have an Account ?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SiginIn')}>
          <Text style={{...globalStyle.SignBtn}}> Login</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: 'row',
          marginStart: 28,
          alignItems: 'flex-start',
          marginBottom: 20,
        }}>
        <CheckBox
          value={checked1}
          onValueChange={setChecked1}
          // style={styles.checkbox}
        />
        <Text
          style={{
            color: '#474746',
            fontSize: 13,
            fontWeight: '500',
            opacity: 1,
          }}>
          Sign me up to receive exclusive offers and news on {'\n'}
          hot new restaurants on Rescounts.
        </Text>
      </View>

      <View
        style={{flexDirection: 'row', marginStart: 28, alignItems: 'center'}}>
        <CheckBox value={checked2} onValueChange={setChecked2} />
        <Text
          style={{
            color: '#474746',
            fontSize: 13,
            fontWeight: '500',
            opacity: 1,
          }}>
          Receive order updates by SMS
        </Text>
      </View>

      <View style={{marginVertical: 35}}>
        <Terms />
      </View>
    </View>
  );
};

export default PersonalForm;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    // marginHorizontal:15
  },
  savePass: {
    color: '#474746',
    fontSize: 13,
    fontWeight: 'bold',
    opacity: 1,
  },
  SignBtn: {
    color: '#474746',
    fontSize: 13,
    fontWeight: '800',
  },
  DontHaveAccont: {
    color: '#A19E9E',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
