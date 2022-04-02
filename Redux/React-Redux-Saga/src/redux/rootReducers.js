import { combineReducers } from "redux";
import { postsReducer } from "./postsReducer";
import {appReducer} from "./appReducer";


export const rootReducers = combineReducers({
    posts: postsReducer,
    app: appReducer
})