import AsyncStorage from '@react-native-community/async-storage'

export const storeData = async (key,data) => {
    try {
      await AsyncStorage.setItem(key, data)
    } catch (e) {
        console.log({e})
    }
  }
   
  export const getData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key)
      return JSON.parse(value)
    } catch(e) {
        console.log(e)
    }
  }
   