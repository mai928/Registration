import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  useWindowDimensions,
  StatusBar,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import MainHeader from '../Componets/MainHeader';
import Person from 'react-native-vector-icons/Ionicons';
import Family from 'react-native-vector-icons/MaterialIcons';
import PersonalForm from '../Componets/PersonalForm';
import FamilyForm from '../Componets/FamilyForm';
import { globalStyle } from '../utils/globalStyle';



const SiginUp = () => {

  const PersonIcon = <Person name="person" size={19} />;
  const FamilyIcon = <Family name="family-restroom" size={19} />;
  const tabs = [
    {title: 'Personal Account', icon: PersonIcon},
    {title: 'Family Account', icon: FamilyIcon},
  ];
  const [selected, setSelected] = useState(0);

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
      <StatusBar hidden />
      <MainHeader />
      <View style={{...globalStyle.innerContainer}}>
        <Text style={{...globalStyle.Header}}>Sign Up</Text>
        <Text style={{...globalStyle.details}}>Add your details to sign up</Text>

        <View style={styles.tabs}>
          {tabs.map((tab, i) => {
            return (
              <TouchableOpacity
                style={{margin: 20}}
                key={i}
                onPress={() => setSelected(i)}>
                <Text
                  style={[
                    selected === i ? styles.selectedTab : styles.UnSelectedTab,
                  ]}>
                  {tab.icon}{'\t'}{tab.title}
                </Text>
                <View
                  style={
                    selected === i
                      ? {
                          borderColor: '#E9D023',
                          borderWidth: 1,
                          marginTop:7,
                          marginHorizontal:40
                        }
                      : null
                  }
                />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      <View>{selected === 0 ? <PersonalForm /> : <FamilyForm />}</View>
    </ScrollView>
  );
};

export default SiginUp;

const styles = StyleSheet.create({
  tabs: {
    flexDirection: 'row',
    marginTop: 25,
  },
  selectedTab: {
    color: '#E9D023',
    fontSize: 17,
    fontWeight: 'bold',
    opacity: 1,
  },
  UnSelectedTab: {
    color: '#BEBEBE',
    fontSize: 17,
    fontWeight: 'bold',
    opacity: 1,
  },

  forgetPass: {
    fontSize: 13,
    fontWeight: '220',
    marginTop: 42,
    color: '#474746',
    opacity: 1,
  },
  OrLogin: {
    marginTop: 42,
    marginBottom: 20,
    fontWeight: '220',
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
});
