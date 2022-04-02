import { combineReducers } from "redux"
import { userReducer } from "./userReducer"
import { todoReducer } from "./todoReducers"

export const rootReducer = combineReducers({
    user: userReducer,
    todo: todoReducer,
})

//! Отримуємо тип нашого редюсера, що дозволить нам вибирати для опрацювання окремі редюсери
export type RootState = ReturnType<typeof rootReducer>
