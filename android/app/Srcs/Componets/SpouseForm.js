import {
  LayoutAnimation,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import ArrowDown from 'react-native-vector-icons/Entypo';
import {globalStyle} from '../utils/globalStyle';

const SpouseForm = () => {
  const [expand, setExpand] = useState(false);

  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpand(expand => !expand);
  };
  return (
    <View style={styles.container}>
      <View style={styles.firstForm}>
        <Text style={styles.question}>
          Would you like to add your students to
          {'\n'}your account?*
        </Text>
        <TouchableOpacity onPress={toggleExpand}>
          <ArrowDown
            name={expand ? '' : 'chevron-right'}
            size={30}
            color="black"
          />
        </TouchableOpacity>
      </View>

      {expand && (
        <View style={styles.secondForm}>
            <Text style={{marginStart:23}}>Add First student</Text>
          <View style={{...globalStyle.innerContainer}}>
            <TextInput
              style={{...globalStyle.inpt, width: 304}}
              placeholder="Spouse First Name"
            />

            <TextInput
              style={{...globalStyle.inpt, width: 304}}
              placeholder="Spouse Last Name"
            />
            <TextInput
              style={{...globalStyle.inpt, width: 304}}
              placeholder="Spouse Phone Number"
            />
            <TextInput
              style={{...globalStyle.inpt, width: 304}}
              placeholder="Spouse Email Number"
            />
          </View>

          <TouchableOpacity
            style={{...globalStyle.innerContainer, marginTop: 12}}
            onPress={toggleExpand}>
            <ArrowDown
              name={expand ? 'chevron-down' : ''}
              size={30}
              color="black"
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default SpouseForm;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  question: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#474746',
    opacity: 1,
  },
  firstForm: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    shadowColor: '#975A6F33',
    borderRadius: 8,
    marginVertical: 10,
    elevation: 30,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#975A6F33',
    width: 344,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondForm: {
    paddingTop: 25,
    backgroundColor: '#FFFFFF',
    shadowColor: '#975A6F33',
    borderRadius: 8,
    marginVertical: 10,
    elevation: 30,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#975A6F33',
    width: 344,
    height: 360,
  },
});
