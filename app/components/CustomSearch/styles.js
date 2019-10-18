import {StyleSheet} from 'react-native'
const height = 48

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    height,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 4,
    backgroundColor: 'white',
    elevation: 5
  },
  button: {
    elevation: 20,
    width: 56,
    height,
    justifyContent: 'center',
    alignItems: 'center'
  },

  textInput: {
    flex: 1,
    height,
    paddingLeft:10,
    backgroundColor: 'white',
    fontSize: 18
  }
})

export default styles
