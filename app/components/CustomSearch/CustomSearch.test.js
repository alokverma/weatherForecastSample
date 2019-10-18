import React from 'react';
import {shallow} from 'enzyme';
import CustomSearch from './index'

describe('CustomSearch',()=>{
    it('should render custom search component',()=>{
        const component = shallow(<CustomSearch />)
        expect(component).toMatchSnapshot()

    });
});