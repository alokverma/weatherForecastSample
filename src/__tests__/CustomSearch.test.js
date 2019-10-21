import React from 'react';
import {shallow} from 'enzyme';
import CustomSearch from '../components/CustomSearch/index'
import {checkProps} from '../utils/index'


describe('CustomSearch',()=>{

    describe('checking SnapShopt',()=>{
        it('should render custom search component',()=>{
            const component = shallow(<CustomSearch />)
            expect(component).toMatchSnapshot()
    
        });
    })

    describe('checkingPropTypes',()=>{
        it('should not throw warning',()=>{
            const expectedProps = {
                value:'Hi There'
            };

            const propsError = checkProps(CustomSearch,expectedProps)
            expect(propsError).toBeUndefined()
        })
    })

});