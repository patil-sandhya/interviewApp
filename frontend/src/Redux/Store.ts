import {applyMiddleware, combineReducers, legacy_createStore} from "redux"
import { reducer as AuthReducer } from "../Redux/Reducer"
import thunk from "redux-thunk"


const rootReducer : any=combineReducers({
   AuthReducer
})



export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))