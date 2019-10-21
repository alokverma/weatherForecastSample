import React, { Component } from 'react'
import {SafeAreaView, View, FlatList} from 'react-native';
import {THEMES} from '../../utils/constants'
const {colors} = THEMES.weatherDefaultTheme;
import LoadingOverlay from '../../components/LodingOverlay'
import CustomSearch from '../../components/CustomSearch';
import ListItem from '../../components/ListItem';
import s from './styles'
import { connect } from 'react-redux'
import { fetchWeather,fetchWeahterFromStorage } from '../../action/WeatherAction'
import NetInfo from "@react-native-community/netinfo"

class WeatherScreen extends Component{

  state = {
    searchValue: '',
  }
 
    render() {
      const {searchValue} = this.state;
      console.log(searchValue)
        return (
         
          <View style = {s.container}>
             <SafeAreaView >
              <CustomSearch
                value = {searchValue}
                onChange = {(value)=>this.handleChange(value)}
                onButtonPress = {this.onButtonPressed}></CustomSearch>
              </SafeAreaView>
              <FlatList 
                  data = { this.props.weatherData.data }
                  keyExtractor={item => item.dt}
                  renderItem = { item => (
                  <ListItem 
                     mainValue={ item.item.weather[0].main }
                     description = {item.item.weather[0].description }
                     date = { item.item.dt_txt }
                     image = {'http://openweathermap.org/img/wn/'+item.item.weather[0].icon+'@2x.png'}
                  />
                 )}
              />
              {this.props.weatherData.isLoading && (
                  <View style={s.loading}>
                    <LoadingOverlay
                    height = {12}
                    color = {colors.white}
                    text = {'Please wait..'}>
                    </LoadingOverlay>
                    </View>
                    )} 
          </View>
        )
      }

      onButtonPressed= ()=>{ 
        if(this.state.searchValue.length != '5' ){
            alert('please enter valid zip code')
            return
        }
        NetInfo.fetch().then(state => {
          if(state.isConnected){
            this.props.fetchWeathers(this.state.searchValue)
          }else{
            this.props.fetchWeathersOffline(this.state.searchValue)
          }
        })
      }

      handleChange = (values)=>{
        this.setState({searchValue:values})
      }
}

const mapStateToProps = state => {
  return { 
    weatherData:state.weather
  }
}

const mapDispatchToProps = dispatch => {
  return { 
    fetchWeathers: (seachVlaue) => { 
      dispatch(fetchWeather(seachVlaue)) 
    },
    fetchWeathersOffline : (seachVlaue) => {
      dispatch(fetchWeahterFromStorage(seachVlaue)) 
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(WeatherScreen)
