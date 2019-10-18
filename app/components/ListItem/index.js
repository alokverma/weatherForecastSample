import PropTypes from 'prop-types'
import React from 'react'
import {Text, View, Image, TouchableOpacity} from 'react-native';
import s from './styles'

const ListItem = (props) => {
  const {mainValue, description,date,image} = props

  return (
    <TouchableOpacity>
    <View style={s.listItem}>
      <View style = {s.container}>
      <Text style = {s.heading}> { mainValue } </Text>
      <Text style = {s.value}> { description } </Text>
      <Text style = {s.value}> { date } </Text>
      </View>
      <Image style = {s.imageStyle}
          source={{uri: image}}>
          </Image>
    </View>
    </TouchableOpacity>
  )
}

ListItem.propTypes = {
  mainValue: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.string,
  image: PropTypes.string

}

export default ListItem
