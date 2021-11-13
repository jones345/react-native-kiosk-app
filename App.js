
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Onboarding from './screens/Onboarding';
import Accounts from './screens/Accounts';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { StatusBar } from 'react-native'
import { Provider } from 'react-native-paper'
import { theme } from './core/theme'
import ChatBot from './screens/ChatBot'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ResetPasswordScreen from './screens/ResetPasswordScreen'
import DrawerNavigator from './components/DrawerNavigator'   
import DocDetails from './screens/DocDetails'

StatusBar.setBarStyle('light-content')
const Stack = createStackNavigator()

export default function App() {
  return (
   
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Onboarding"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Accounts" component={Accounts} />
          <Stack.Screen name="Onboarding" component={Onboarding} />
          <Stack.Screen name="ChatBot" component={ChatBot} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="DocDetails" component={DocDetails} />
          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
           <Stack.Screen
            name="DrawerNavigator"
            component={DrawerNavigator}
          />
        </Stack.Navigator>
        
      </NavigationContainer>
   
  );
}


