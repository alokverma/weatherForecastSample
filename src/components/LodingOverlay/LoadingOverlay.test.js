import React from 'react';
import {shallow} from 'enzyme';
import LoadingOverlay from './index'

describe('LoadingOverlay',()=>{
    it('should render list LoadingOverlay component',()=>{
        const component = shallow(<LoadingOverlay />)
        expect(component).toMatchSnapshot()

    });
});