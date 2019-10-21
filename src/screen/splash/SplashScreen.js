import React, { Component } from 'react'
import {View, Image, Text} from 'react-native';
import s from './styles';
import {THEMES} from '../../utils/constants'
const {colors} = THEMES.weatherDefaultTheme;

class SplashScreen extends Component{

    componentDidMount () {
      setTimeout (() => {
          this.props.navigation.navigate('Weather')
      }, 2000);
   }

    render() {
        return (
          <View style={s.container}>
            <Image
              style={{width: 300, height: 300}}
              source={require('../../assets/splash.png')}>
              </Image>
              <Text style = {s.textstyle} >WEATHER</Text>
            
          </View>
        )
      }
}


export default SplashScreen