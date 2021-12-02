import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Home from './screens/Home';
import Main from './screens/Main';
import Notification from './screens/Notification';
import CoachDetail from './screens/CoachDetail';
import EventDetail from './screens/EventDetail';
import { AppTabNavigatorO } from './components/AppTabNavigatorO';
import OpponentDetail from './screens/OpponentDetail';
import RequestProfile from './screens/RequestProfile';
import About from './screens/About';
import RateCoach from './screens/RateCoach';
import { AppTabNavigatorC } from './components/AppTabNavigatorC';
import { AppTabNavigatorE } from './components/AppTabNavigatorE';
import Settings from './screens/Settings';
import Edit from './screens/Edit';
import Feedback from './screens/Feedback';
import {AppTabNavigatorOreg} from './components/AppTabNavigatorOreg';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
export default class App extends Component {
  render() { 
    return <AppContainer />;
  }
} 

const switchNavigator = createSwitchNavigator({
  
  MainScreen: { screen: Main },
  HomeScreen: { screen: Home },
  SignInScreen: { screen: Login },
  SignUpScreen: { screen: Signup },
  OpponentsScreen: { screen: AppTabNavigatorO },
  OpponentsScreenReg:{screen:AppTabNavigatorOreg},
  CoachScreen: { screen: AppTabNavigatorC },
 
  EventScreen: { screen: AppTabNavigatorE },
  RequestProfileScreen: { screen: RequestProfile },
  OpponentDetailScreen: { screen: OpponentDetail },
  NotificationScreen: { screen: Notification },
 
  CoachDetailScreen: { screen: CoachDetail },
  EventDetailScreen: { screen: EventDetail },
  SettingsScreen: { screen: Settings },
  EditScreen: { screen: Edit },
  FeedbackScreen : {screen: Feedback},
  AboutScreen: {screen:About},
  RateCoachScreen : {screen:RateCoach},
});
const AppContainer = createAppContainer(switchNavigator);
