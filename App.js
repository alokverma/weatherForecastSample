/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import  { createStackNavigator } from 'react-navigation-stack';
import SplashScreen from './app/screen/splash/SplashScreen';
import WeatherScreen from './app/screen/weatherdetail/WeatherDetail';

const navigator = createSwitchNavigator(
  {
    Splash:{ screen: SplashScreen,
      navigationOptions: {
      header:null 
      }
    },
    Weather: WeatherScreen
 },
  {
    initialRouteName: 'Splash',
    defaultNavigationOptions: {
      title: 'App' 
    }
  }
);

export default createAppContainer(navigator);
