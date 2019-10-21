import React from 'react';
import {shallow} from 'enzyme';
import WeatherDetail from '../screen/weatherdetail/WeatherDetail';

describe('WeatherDetails',()=>{
    describe('checking SnapShopt',()=>{
        it('should render weather details screen component',()=>{
            const component = shallow(<WeatherDetail />)
            expect(component).toMatchSnapshot()
        });
    })
});