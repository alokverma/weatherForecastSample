import {createStore, combineReducers, applyMiddleware} from 'redux';
import weatherReducer from './src/reducers/Weather';
import thunk from 'redux-thunk'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

const rootReducer = combineReducers({ 
    weather: weatherReducer
});

const configureStore = () => {
    return createStoreWithMiddleware(rootReducer);
}

export default configureStore;
