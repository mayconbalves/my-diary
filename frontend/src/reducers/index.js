import { combineReducers } from 'redux'
import discoveryReducer from '../containers/home/reducer'
import getDiscoveryReducer from '../containers/anotations/reducer'


const rootReducer = combineReducers({
  // all reducers
  discoveryReducer,
  getDiscoveryReducer
})

export default rootReducer