import {StyleSheet} from 'react-native'
import { THEMES } from '../../utils/constants'
const {colors} = THEMES.weatherDefaultTheme


const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    margin: 10,
    flexDirection : 'row',
    borderColor:colors.dark,
    borderRadius:10,
    borderWidth:1,
    backgroundColor:colors.gray
  },
  container:{
    flex:1,
  },
  heading: {
    fontSize:20,
    marginLeft:10,
    color: colors.dark
  },
  value: {
    fontSize:15,
    marginLeft:10,
    color: colors.dark
  },
  imageStyle:{
    width: 100, 
    padding: 10,
    flexDirection: 'column',
    marginBottom: 10,
    justifyContent: 'center',
    height: 50
  }
})

export default styles
