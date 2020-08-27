import React from 'react';
import { Button, View, Text, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import ProfileScreen from './profile';
import HomeScreen from './home';
import AllocatedScreen from './allocated';
import AboutScreen from './about';

import { bottomtabnavigator } from '../variables.js'

const Tab = createBottomTabNavigator();

// Main App
export default class Index extends React.Component {

  render(){
    return (
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
              iconName = focused
              ? 'ios-home' 
              : 'ios-home';
            } else if (route.name === 'Profile') {
              iconName = focused
              ? 'ios-contact'
              : 'ios-contact';
            }
            else if (route.name === 'Bookings') {
              iconName = focused
              ? 'ios-timer'
              : 'ios-timer';
            }
            else if (route.name === 'About') {
              iconName = focused
              ? 'ios-information-circle-outline'
              : 'ios-information-circle-outline';
            }
            return <Icon name={iconName} size={size} color={color} />;
        },
      })}
        tabBarOptions={{
        activeTintColor: bottomtabnavigator[0].bottomtab_active_tint_color,
        inactiveTintColor: bottomtabnavigator[0].bottomtab_inactive_tint_color,
        }}
      >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen 
            name="Bookings" 
            component={AllocatedScreen} 
            initialParams={{userid:5}} 
          />
          <Tab.Screen name="Profile" component={ProfileScreen} />
          <Tab.Screen name="About" component={AboutScreen} />

      </Tab.Navigator>
    ); 
  } 
}

