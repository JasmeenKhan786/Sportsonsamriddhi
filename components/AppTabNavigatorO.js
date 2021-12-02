import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

import firebase from 'firebase';
import db from '../config';

import FindOpponents from '../screens/FindOpponents';
import RegisterOpponent from '../screens/RegisterOpponent';
import { Icon } from 'react-native-elements';


import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

export const AppTabNavigatorO=createBottomTabNavigator({
  
    FindOpponents : {
      screen : FindOpponents,
      navigationOptions:{
        tabBarLabel:'Find Rivals',
        activeTintColor:'#FFC0CB',
        tabBarIcon:({ tintColor }) => (
        <View>
        
          <Icon name="people" type="ionicon" size={30} color={tintColor} />
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
      

      RegisterOpponent:{
        screen: RegisterOpponent,
         navigationOptions:{
        tabBarLabel:'Register as Rival',
        activeTintColor:'#FFC0CB',
        tabBarIcon:({ tintColor }) => (
        <View>
        
          <Icon name="md-person-add-outline" type="ionicon" size={30} color={tintColor} />
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

      }
      
})
