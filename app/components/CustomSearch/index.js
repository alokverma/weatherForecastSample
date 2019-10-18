import PropTypes from 'prop-types'
import React from 'react'
import {TextInput, View, Button} from 'react-native';
import s from './styles'

const CustomSearch = (props) => {
  const {value, onChange, onButtonPress} = props

  return (
    <View style={s.container}>
     
      <TextInput
        style={s.textInput}
        value={value}
        keyboardShouldPersistTaps={false}
        underlineColorAndroid="white"
        placeholderTextColor="gray"
        onChangeText={(value)=>onChange(value)}
        placeholder="Search" />
      {!!value && value.length !== 0 ? (
        <Button
          style={s.button}
          title = 'search'
          onPress={() => onButtonPress()}>
        </Button>
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
