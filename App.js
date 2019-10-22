/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import SplashScreen from './src/screen/splash/SplashScreen';
import WeatherScreen from './src/screen/weatherdetail/WeatherDetail';

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
