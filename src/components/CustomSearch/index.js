import PropTypes from 'prop-types'
import React from 'react'
import {TextInput, View, Button, TouchableOpacity} from 'react-native';
import s from './styles'
import Icon from 'react-native-vector-icons/FontAwesome';
import {THEMES} from '../../utils/constants'
const {colors} = THEMES.weatherDefaultTheme;

//Icon.loadFont();

const CustomSearch = (props) => {
  const {value, onChange, onButtonPress} = props

  return (
    <View style={s.container}>
     
      <TextInput
        style={s.textInput}
        value={value}
        keyboardShouldPersistTaps={false}
        underlineColorAndroid="white"
        keyboardType='numeric'
        placeholderTextColor="gray"
        maxLength={5}
        onChangeText={(value)=>onChange(value)}
        placeholder="Enter zip code" />
          
      {!!value && value.length !== 0 ? (
        <TouchableOpacity
            style={s.button}>
             <Icon
              name="search" 
             size={30}
              color={colors.dark} 
              onPress={() => onButtonPress()}/>
        </TouchableOpacity>
        // <Icon.Button
        //   style={s.button}
        //   icon = "search"
        //   title = 'search'
        //   onPress={() => onButtonPress()}>
        // </Icon.Button>
       
      ) : (<View style={s.button} />)}
     
    </View>
  )
}

CustomSearch.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onButtonPress: PropTypes.func
}

export default CustomSearch
