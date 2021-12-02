import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

import firebase from 'firebase';
import db from '../config';

import FindEvent from '../screens/FindEvent';
import CreateEventA from '../screens/CreateEvent';
import { Icon } from 'react-native-elements';


import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

export const AppTabNavigatorE=createBottomTabNavigator({
    FindEvent : {
      screen : FindEvent,
      navigationOptions:{
        tabBarLabel:'Join Events',
        activeTintColor:'#FFC0CB',
        tabBarIcon:({ tintColor }) => (
        <View>
        
          <Icon name="calendar" type="font-awesome" size={30} color={tintColor} />
        </View>
      ),

           tabBarOptions: {
        activeTintColor: 'white',
        inactiveTintColor: 'black',
        style: {
          backgroundColor: '#291749',
          opacity:0.9,
          borderTopWidth: 0,
        },
      },
      }
      },
     
   CreateEvent:{
        screen: CreateEventA,
         navigationOptions:{
        tabBarLabel:'Create an Event',
        activeTintColor:'#FFC0CB',
        tabBarIcon:({ tintColor }) => (
        <View>
        
          <Icon name="calendar-plus-o" type="font-awesome" size={30} color={tintColor} />
        </View>
      ),

           tabBarOptions: {
        activeTintColor: 'white',
        inactiveTintColor: 'black',
        style: {
          backgroundColor: '#291749',
          borderTopWidth: 0,
          opacity:0.9,
        },
      },
      }
  
      },
  
      
})
