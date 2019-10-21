import {
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_REQUEST,
  ERROR_ACTION
} from '../action/types';

const initialState = {
    data:[],
    error: false,
    isLoading: false
  }
  
  export default  weatherReducer=(state = initialState, action)=> {
    switch (action.type) {
    case FETCH_WEATHER_REQUEST: {
      return {...state,
        isLoading : true}
    }
    case FETCH_WEATHER_SUCCESS : {
      return {
        ...state,
        data : action.payload,
        isLoading:false
      }
    }
    case ERROR_ACTION: {
      return {...state,
        isLoading:false,
        error : true}
    }
    default:
      return state
    }
  }