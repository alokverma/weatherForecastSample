import React from 'react';
import {shallow} from 'enzyme';
import Loading from './index';
import {checkProps} from '../../utils/index'


describe('Loading',()=>{
    describe('checkingSnapShot',()=>{
        it('should render list Loading component',()=>{
            const component = shallow(<Loading />)
            expect(component).toMatchSnapshot()
    
        });
    })

    describe('checking Prop Type',()=>{
        it('should not throw warning',()=>{
            const expectedProps = {
                size: 'large',
                height:12,
                color: 'red'
            };

            const propsError = checkProps(Loading,expectedProps)
            expect(propsError).toBeUndefined()
        })
    })
    
});