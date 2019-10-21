import reducer from '../reducers/Weather';
import * as types from '../action/types';
import expect from 'expect';

describe('weather reducer', () => {
    it('should return FETCH_WEATHER_REQUEST',()=>{
            const startAction = {
            type: types.FETCH_WEATHER_REQUEST,
          };  
            expect(reducer(undefined,startAction)).toEqual({data:[],error:false,isLoading:true});
    });

    it('should handle FETCH_WEATHER_SUCCESS',()=>{
        const successAction = {
            type: types.FETCH_WEATHER_SUCCESS,
            payload: [], 
          };
          expect(reducer(undefined, successAction)).toEqual({data:[],error:false,isLoading:false,});
    });

    it('should handle FETCH_WEATHER_ERROR_ACTION',()=>{
        const failAction = {
            type: types.ERROR_ACTION,
          };
          expect(reducer(undefined, failAction)).toEqual({data:[],error:true,isLoading:false});
    });
  });