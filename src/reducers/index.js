import { combineReducers } from "redux";
import hobbyReducer from "./hobby";
import userReducer from './user';

// root Reducer => file tong hop cac Reducers
const rootReducer = combineReducers({
    // co bao nhieu Reducer thi bo vao day
    hobby: hobbyReducer,
    user: userReducer
})

export default rootReducer;