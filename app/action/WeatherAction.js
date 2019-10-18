import {
    FETCH_WEATHER_SUCCESS,
    FETCH_WEATHER_REQUEST,
    ERROR_ACTION
} from './types';
import axios from 'axios';

export const fetchingFetherRequest =() => ({ type: FETCH_WEATHER_REQUEST})

export const fetchingWeatherSuccess = (data) => ({
    type: FETCH_WEATHER_SUCCESS,
    payload : data
})

export const fetchingWeatherFaliure = (error) => ({
    type: ERROR_ACTION,
    payload:error
})

export const fetchWeather = () => {
    return async dispatch => {
         dispatch(fetchingFetherRequest())
         let response = await axios.get('https://samples.openweathermap.org/data/2.5/forecast?zip=122001&appid=b6907d289e10d714a6e88b30761fae22')
         const list = response.data.list;
          console.log(list);
          dispatch(fetchingWeatherSuccess(list))
        };
}


