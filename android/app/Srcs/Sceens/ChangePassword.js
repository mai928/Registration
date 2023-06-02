import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import MainHeader from '../Componets/MainHeader';
import {globalStyle} from '../utils/globalStyle';
import {Formik} from 'formik';
import * as yup from 'yup';
import Eye from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

const ChangePassword = () => {
  const navigation = useNavigation();

  return (
    <Formik
      onSubmit={values => {
        console.log(values), navigation.navigate('SuccessPassword');
      }}
      initialValues={{currentPass: '', newPass: '', confirmPass: ''}}
      validationSchema={yup.object().shape({
        currentPass: yup.string().required('is requird'),
        newPass: yup.string().required('is requird'),
        confirmPass: yup
          .string()
          .required('is requird')
          .oneOf([yup.ref('newPass')], 'Both password need to be the same'),
      })}>
      {({handleSubmit, handleChange, handleBlur, values, isValid, errors}) => (
        <View>
          <MainHeader />
          <View style={{...globalStyle.innerContainer, marginTop: 25}}>
            <Text style={{...globalStyle.Header, marginBottom: 43}}>
              Change Password
            </Text>

            <View>
              <TextInput
                value={values.currentPass}
                onBlur={handleBlur('currentPass')}
                onChangeText={handleChange('currentPass')}
                style={{...globalStyle.inpt}}
                placeholder="Current Password"
              />
              <Eye
                style={{position: 'absolute', right: 20, top: 27}}
                name="eye"
                color="#BEBEBE"
                size={25}
              />

              {errors.currentPass && (
                <Text
                  style={{fontSize: 12, color: '#FF0D10', fontWeight: '500'}}>
                  {errors.currentPass}
                </Text>
              )}
            </View>

            <View>
              <TextInput
                value={values.newPass}
                onBlur={handleBlur('newPass')}
                onChangeText={handleChange('newPass')}
                style={{...globalStyle.inpt}}
                placeholder="New Password"
              />
              <Eye
                style={{position: 'absolute', right: 20, top: 27}}
                name="eye"
                color="#BEBEBE"
                size={25}
              />
              {errors.newPass && (
                <Text
                  style={{fontSize: 12, color: '#FF0D10', fontWeight: '500'}}>
                  {errors.newPass}
                </Text>
              )}
            </View>

            <View>
              <TextInput
                value={values.confirmPass}
                onBlur={handleBlur('confirmPass')}
                onChangeText={handleChange('confirmPass')}
                style={{...globalStyle.inpt}}
                placeholder="Confirm Password"
              />
              <Eye
                style={{position: 'absolute', right: 20, top: 27}}
                name="eye"
                color="#BEBEBE"
                size={25}
              />
              {errors.confirmPass && (
                <Text
                  style={{fontSize: 12, color: '#FF0D10', fontWeight: '500'}}>
                  {errors.confirmPass}
                </Text>
              )}
            </View>
            <TouchableOpacity
              disabled={!isValid}
              onPress={handleSubmit}
              style={
                !isValid
                  ? {...globalStyle.unValidColor}
                  : {...globalStyle.submitValid}
              }>
              <Text style={{...globalStyle.TextSubmit}}>Reset Password</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({});
