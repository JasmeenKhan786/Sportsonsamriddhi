import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

import firebase from 'firebase';
import db from '../config';

import FindCoach from '../screens/FindCoach';
import RegisterCoach from '../screens/RegisterCoach';
import { Icon } from 'react-native-elements';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

export const AppTabNavigatorC = createBottomTabNavigator({
  FindCoach: {
    screen: FindCoach,

    navigationOptions: {
      tabBarLabel: 'Find Coaches',
      tabBarIcon: ({ tintColor }) => (
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
    },
  },
  
  RegisterCoach: {
    screen: RegisterCoach,
    navigationOptions: {
      tabBarLabel: 'Register as Coach',
      activeTintColor: '#FFC0CB',
     tabBarIcon: ({ tintColor }) => (
        <View>
        
          <Icon name="ios-person-add-sharp" type="ionicon" size={27} color={tintColor} />
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
    },
  },
});
