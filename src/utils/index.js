import checkPropTypes from 'check-prop-types'

export const checkProps = (component, expectedProps)=>{
    const propError  = checkPropTypes(component.propType,expectedProps,'props',component.name)
    return propError;
}