import { ActionCreator, AnyAction, Reducer } from "redux"
import { ME_REQUEST, ME_REQUEST_ERROR, ME_REQUEST_SUCCESS } from "./me/actions"
import { meReducer, MeState } from "./me/reducer"

export type RootState = {
    commentText: string
    me: MeState
}

const initialState: RootState = {
    commentText: "Hello Skillbox",
    me: {
        loading: false,
        error: "",
        data: {},
    },
}
export const UPDATE_COMMENT = "UPDATE_COMMENT"
export const updateComment: ActionCreator<AnyAction> = (text) => ({
    type: UPDATE_COMMENT,
    text,
})

export const rootReducer: Reducer<RootState> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case UPDATE_COMMENT:
            return {
                ...state,
                commentText: action.text,
            }
        case ME_REQUEST:
        case ME_REQUEST_SUCCESS:
        case ME_REQUEST_ERROR:
            return {
                ...state,
                me: meReducer(state.me, action),
            }
    }
    return state
}
