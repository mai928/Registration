import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  LayoutAnimation,
} from 'react-native';
import React, {useState} from 'react';
import Check from 'react-native-vector-icons/Ionicons';
import CheckBox from '@react-native-community/checkbox';
import ArrowDown from 'react-native-vector-icons/Entypo';
import StudentForm from './StudentForm';
import {globalStyle} from '../utils/globalStyle';
import Terms from './Terms';
import {useNavigation} from '@react-navigation/native';
import SpouseForm from './SpouseForm';

const FamilyForm = () => {
  const navigation = useNavigation();
  const [checked, setChecked] = useState(false);
  const [expand, setExpand] = useState(false);

  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);

  const handleChange = () => {
    setChecked(prevState => !prevState);
  };

  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpand(expand => !expand);
  };

  return (
    <View style={styles.Container}>
      <View style={styles.firstForm}>
        <Text
          style={{
            marginStart: 20,
            paddingTop: 18,
            color: '#474746',
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          Your Info
        </Text>
        <View style={{...globalStyle.innerContainer}}>
          <TextInput
            style={{...globalStyle.inpt, width: 304}}
            placeholder="First Name"
          />
          <TextInput
            style={{...globalStyle.inpt, width: 304}}
            placeholder="Last Name"
          />
          <TextInput
            style={{...globalStyle.inpt, width: 304}}
            placeholder="Email Address"
          />
          <TextInput
            style={{...globalStyle.inpt, width: 304}}
            placeholder="Phone Number"
          />
          <TextInput
            style={{...globalStyle.inpt, width: 304}}
            placeholder="Password"
          />
          <TextInput
            style={{...globalStyle.inpt, width: 304}}
            placeholder="Confirm Password"
          />
        </View>

        <TouchableOpacity
          onPress={handleChange}
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

        <TouchableOpacity
          onPress={toggleExpand}
          style={{...globalStyle.innerContainer}}>
          <ArrowDown
            name={expand ? 'chevron-up' : 'chevron-down'}
            size={30}
            color="black"
          />
        </TouchableOpacity>
      </View>

      <View>
        {expand && (
          <View>
            <StudentForm toggleExpand={toggleExpand} expand={expand} />
            <SpouseForm toggleExpand={toggleExpand} expand={expand} />
          </View>
        )}
      </View>

      <View style={{...globalStyle.innerContainer}}>
        <TouchableOpacity style={styles.buttonLogin}>
          <Text style={styles.btnLogin}>Craate account</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: 'row',
          marginBottom: 26,
          marginTop: 32,
          marginStart: 28,
        }}>
        <Text style={styles.DontHaveAccont}>Already have an Account ?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SiginIn')}>
          <Text style={styles.SignBtn}> Login</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: 'row',
          marginStart: 10,
          alignItems: 'flex-start',
          marginBottom: 20,
        }}>
        <CheckBox value={checked1} onValueChange={setChecked1} />
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
        style={{
          flexDirection: 'row',
          marginStart: 10,
          alignItems: 'center',
          justifyContent:'flex-start'
                }}>
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

      <View style={{marginVertical: 41}}>
        <Terms />
      </View>
    </View>
  );
};

export default FamilyForm;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    marginHorizontal: 20,
  },
  firstForm: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#975A6F33',
    borderRadius: 8,
    marginVertical: 10,
    elevation: 30,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#975A6F33',
    height: 504,
  },
  buttonLogin: {
    backgroundColor: '#BEBEBE',
    width: 334,
    height: 48,
    borderRadius: 10,
    marginTop: 33,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnLogin: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
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
