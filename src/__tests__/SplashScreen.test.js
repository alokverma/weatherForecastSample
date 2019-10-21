import React from 'react';
import {shallow} from 'enzyme';
import SplashScreen from '../screen/splash/SplashScreen';

describe('SplashScreen',()=>{
    describe('checking SnapShopt',()=>{
        it('should render splash screen  component',()=>{
            const component = shallow(<SplashScreen />)
            expect(component).toMatchSnapshot()
        });
    })
});