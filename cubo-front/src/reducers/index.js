import { combineReducers } from 'redux'
import cuboReducer from './cubo'

const appReducer = combineReducers({
    cubo: cuboReducer
})

const rootReducer = (state, action) => {
    return appReducer(state, action)
}

export default rootReducer
