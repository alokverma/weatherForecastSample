import {
    FETCH_WEATHER_SUCCESS,
    FETCH_WEATHER_REQUEST,
    ERROR_ACTION
} from './types';
import axios from 'axios';
import {storeData,getData} from '../utils/storage'



export const fetchingFetherRequest =() => ({ type: FETCH_WEATHER_REQUEST})

export const fetchingWeatherSuccess = (data) => ({
    type: FETCH_WEATHER_SUCCESS,
    payload : data
})

export const fetchingWeatherFaliure = (error) => ({
    type: ERROR_ACTION,
    payload:error
})

export const fetchWeather = (zipCode) => {
    return async dispatch => {
         let code = zipCode
         dispatch(fetchingFetherRequest())
         let response = await axios.get('https://samples.openweathermap.org/data/2.5/forecast?zip='+{code}+'&appid=b6907d289e10d714a6e88b30761fae22')         
         const list = response.data.list;
         storeData(code,JSON.stringify(list))
         console.log(list);
         dispatch(fetchingWeatherSuccess(list))
        };
}

export const fetchWeateherFromServer = async() =>{
    let response = await axios.get('https://samples.openweathermap.org/data/2.5/forecast?zip=12223&appid=b6907d289e10d714a6e88b30761fae22')         
    const list = response.data.list;
    return list;

}

export const fetchWeahterFromStorage = (zipCode) => {
    return async dispatch =>{
        let code = zipCode
         dispatch(fetchingFetherRequest())
         let response = await getData(code)         
         console.log(response);
         dispatch(fetchingWeatherSuccess(response))
    }
}





