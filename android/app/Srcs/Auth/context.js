import axios from 'axios';
import react, {createContext, useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {BASE_URL} from './Config';
export const Context = createContext();
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthProvider = ({children}) => {
  const [userInfo, setUserInfo] = useState({});
  
  const SignUp = (
    firstName,
    lastName,
    email,
    phoneNumber,
    password,
    Repassword,
  ) => {
    axios
      .post(`${BASE_URL}`, {
        firstName,
        lastName,
        email,
        phoneNumber,
        password,
        Repassword,
      })
      .then(res => {
        let userInfo = res.data;
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        console.log(userInfo);
        Alert.alert('sucess');
      })
      .catch(e => {
        console.log('SignUp Error', e);
      });
  };

  const Login = (email, password) => {
    axios
      .post(`${BASE_URL}`, {
        email,
        password,
      })
      .then(res => {
        let userInfo = res.data;
        setUserInfo(userInfo);
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        console.log(userInfo);
        Alert.alert('sucess');
      })
      .catch(e => {
        console.log(e);
      });
  };

  const isLoggedIn = async () => {
    try {
      let userInfo = await AsyncStorage.getItem('userInfo');
      userInfo = JSON.parse(userInfo);

      if (userInfo) {
        setUserInfo(userInfo);
      }
    } catch (e) {
      console.log(`is logged in error ${e}`);
    }
  };

    useEffect(() => {
      isLoggedIn();
    }, []);

  return (
    <Context.Provider value={{SignUp, userInfo, Login}}>
      {children}
    </Context.Provider>
  );
};


//    axios.post(`${BASE_URL}` ,{
//     firstName ,lastName ,email ,phoneNumber ,password ,Repassword
//    }).then(res =>{
//          let UserInfo=res.data.collection.item.map((info)=>{
//                      console.log( info.info.request.body.raw)
//          })
//          console.log('UserInfo::::',UserInfo)
//    }).catch(e=>{
//     console.log('SignUp Error' ,e)
//    })
