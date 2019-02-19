import { combineReducers } from "redux";
import books from './books-reducer'
import user from './user-reducer'

const rootReducer = combineReducers({
    books, 
    user
})

export default rootReducer