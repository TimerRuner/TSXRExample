//? інтерфейс для стейта
export interface UserState {
    users: any[]
    loading: boolean
    error: null | string
}

//? інтерфейс для екшена
// interface UserAction {
//     type: string
//     payload?: any
// }

export enum UsersActionTypes {
    FETCH_USERS = "FETCH_USERS",
    FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
    FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
}

interface FetchUsersAction {
    type: UsersActionTypes.FETCH_USERS
}

interface FetchUsersSuccessAction {
    type: UsersActionTypes.FETCH_USERS_SUCCESS
    payload: any[]
}

interface FetchUsersErrorAction {
    type: UsersActionTypes.FETCH_USERS_ERROR
    payload: string
}

//? описали для екшенів одразу усі можливі interface екшенів
export type UserActions =
    | FetchUsersAction
    | FetchUsersSuccessAction
    | FetchUsersErrorAction
