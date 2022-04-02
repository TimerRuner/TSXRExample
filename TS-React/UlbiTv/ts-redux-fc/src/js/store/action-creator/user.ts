import axios from "axios"
import { Dispatch } from "react"
import { UserActions, UsersActionTypes } from "../../types/user"

export const fetchUsers = () => {
    //? Задаємо типізацію dispatch
    return async (dispatch: Dispatch<UserActions>) => {
        try {
            dispatch({ type: UsersActionTypes.FETCH_USERS })
            const response = await axios.get(
                "https://jsonplaceholder.typicode.com/users"
            )
            setTimeout(() => {
                dispatch({
                    type: UsersActionTypes.FETCH_USERS_SUCCESS,
                    payload: response.data,
                })
            }, 500)
        } catch (error) {
            dispatch({
                type: UsersActionTypes.FETCH_USERS_ERROR,
                payload: `Прийшла помилка при загрузці користувачів`,
            })
        }
    }
}
