import React from 'react'
import {View} from 'react-native'
import Loading from '../Loading'
import s from './styles'

const LoadingOverlay = ({text,color,height}) => (
  <View style={s.loadingContainer}>
    <View style={s.textContainer}>
      <Loading 
          text={text} 
          color={color}
          height = {height} />
    </View>
  </View>
)


export default LoadingOverlay