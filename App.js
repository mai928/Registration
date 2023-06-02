import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import SignIn from './android/app/Srcs/Sceens/SignIn';
import ForgetPassword from './android/app/Srcs/Sceens/ForgetPassword';
import SiginUp from './android/app/Srcs/Sceens/SiginUp';
import {AuthProvider, Context} from './android/app/Srcs/Auth/context';
import Home from './android/app/Srcs/Sceens/Home';
import ChangePassword from './android/app/Srcs/Sceens/ChangePassword';
import CheckToCreatePassword from './android/app/Srcs/Sceens/CheckToCreatePass.js';
import SuccessPassword from './android/app/Srcs/Sceens/SuccessPassword';
import VerifyPhone from './android/app/Srcs/Sceens/VerifyPhone';
import VerifyGmail from './android/app/Srcs/Sceens/VerifyGmail';
import InptverifyGmail from './android/app/Srcs/Sceens/InptverifyGmail';
import InptVerifyPhone from './android/app/Srcs/Sceens/InptVerifyPhone';
const Stack = createStackNavigator();

export const App = () => {
  const {userInfo} = useContext(Context);
  console.log({userInfo});
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          cardStyle: {
            backgroundColor: 'white',
          },
        }}>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="SiginIn"
          component={SignIn}
        />r
        <Stack.Screen name="Home" component={Home} />

        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="SiginUp"
          component={SiginUp}
        />

        <Stack.Screen
          options={{headerShown: false}}
          name="InptVerifyPhone"
          component={InptVerifyPhone}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="InptverifyGmail"
          component={InptverifyGmail}
        />

        <Stack.Screen
          options={{headerShown: false}}
          name="VerifyPhone"
          component={VerifyPhone}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="VerifyGmail"
          component={VerifyGmail}
        />

        <Stack.Screen
          options={{headerShown: false}}
          name="SuccessPassword"
          component={SuccessPassword}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="CheckToCreatePassword"
          component={CheckToCreatePassword}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="ChangePassword"
          component={ChangePassword}
        />

        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="ForgetPassword"
          component={ForgetPassword}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const AppContainer = () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};

export default AppContainer;
