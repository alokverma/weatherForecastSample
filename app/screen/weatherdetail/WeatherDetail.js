import React, { Component } from 'react'
import {View, FlatList} from 'react-native';
import {THEMES} from '../../utils/constants'
const {colors} = THEMES.weatherDefaultTheme;
import LoadingOverlay from '../../components/LodingOverlay'
import CustomSearch from '../../components/CustomSearch';
import ListItem from '../../components/ListItem';
import s from './styles'
import { connect } from 'react-redux'
import {fetchWeather} from '../../action/WeatherAction'

class WeatherScreen extends Component{

  state = {
    searchValue: '',
  }
 
    render() {
      const {searchValue} = this.state;
      console.log(searchValue)
        return (
          <View style={s.container}>
              <CustomSearch
                value = {searchValue}
                onChange = {(value)=>this.handleChange(value)}
                onButtonPress = {this.onButtonPressed}></CustomSearch>
                
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
                    color = {colors.raspberry}
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
        this.props.fetchWeathers()
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
  return { fetchWeathers: () => dispatch(fetchWeather()) } 
}

export default connect(mapStateToProps,mapDispatchToProps)(WeatherScreen)
