import axios from "axios"
import { Action, ActionCreator } from "redux"
import { ThunkAction } from "redux-thunk"
import { RootState } from "../store"
interface IUserData {
    name?: string
    iconImg?: string
}

export const ME_REQUEST = "ME_REQUEST"
export const ME_REQUEST_SUCCESS = "ME_REQUEST_SUCCESS"
export const ME_REQUEST_ERROR = "ME_REQUEST_ERROR"

export type MeRequestAction = {
    type: typeof ME_REQUEST
}
export type MeRequestSuccessAction = {
    type: typeof ME_REQUEST_SUCCESS
    data: IUserData
}
export type MeRequestErrorAction = {
    type: typeof ME_REQUEST_ERROR
    error: string
}

export const meRequest: ActionCreator<MeRequestAction> = () => ({
    type: ME_REQUEST,
})
export const meRequestSuccess: ActionCreator<MeRequestSuccessAction> = (
    data: IUserData
) => ({
    type: ME_REQUEST_SUCCESS,
    data,
})
export const meRequestError: ActionCreator<MeRequestErrorAction> = (
    error: string
) => ({
    type: ME_REQUEST_ERROR,
    error,
})
