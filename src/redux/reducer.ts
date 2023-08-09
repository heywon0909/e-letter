import { combineReducers } from 'redux';
import letterReducer from './slices/letterSlice';
import userReducer from './slices/userSlice';

const rootReducer = combineReducers({
     letters: letterReducer,
    user: userReducer
})
export default rootReducer;