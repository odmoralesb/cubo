import { combineReducers } from 'redux'
import cuboReducer from './cubo'
import layoutReducer from './layout'

const appReducer = combineReducers({
    cubo: cuboReducer,
    layout: layoutReducer
})

const rootReducer = (state, action) => {
    return appReducer(state, action)
}

export default rootReducer
