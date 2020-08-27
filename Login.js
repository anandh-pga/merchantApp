import React,{Component} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Index from './Screens/Index'
import Mobile_Number from './Screens/Mobile_Number';
import OTP from './Screens/OTP';

const Stack = createStackNavigator();

export default function Login() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown:false }}>
        <Stack.Screen name="Mobile_Number" component={Mobile_Number} />
        <Stack.Screen name="OTP" component={OTP} />
        <Stack.Screen name='Index' component={Index} />        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
