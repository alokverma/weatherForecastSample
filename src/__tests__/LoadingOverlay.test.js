import React from 'react';
import {shallow} from 'enzyme';
import LoadingOverlay from '../components/LodingOverlay/index'

describe('LoadingOverlay',()=>{
    it('should render list LoadingOverlay component',()=>{
        const component = shallow(<LoadingOverlay />)
        expect(component).toMatchSnapshot()

    });
});