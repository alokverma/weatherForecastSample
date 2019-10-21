import React from 'react';
import {shallow} from 'enzyme';
import ListItem from '../components/ListItem/index'

describe('ListItem',()=>{
    it('should render list item component',()=>{
        const component = shallow(<ListItem />)
        expect(component).toMatchSnapshot()

    });
});