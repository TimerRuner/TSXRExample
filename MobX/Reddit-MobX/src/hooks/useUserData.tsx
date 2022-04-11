import React, { useState, useEffect, useContext } from "react"
import axios from "axios"
import { tokenContext } from "../shared/context/tokenContext"
import { useDispatch, useSelector } from "react-redux"
import {
    meRequest,
    meRequestError,
    meRequestSuccess,
} from "../store/me/actions"
import { RootState } from "../store/store"

export interface IUserData {
    name?: string
    iconImg?: string
}

export function useUserData() {
    const data = useSelector<RootState, IUserData>((state) => state.me.data)
    const token = useContext(tokenContext)
    const dispatch = useDispatch()

    useEffect(() => {
        if (!token) return
        dispatch(meRequest())
        axios
            .get("https://oauth.reddit.com/api/v1/me", {
                headers: { Authorization: `bearer ${token}` },
            })
            .then((resp) => {
                const userData = resp.data
                const myUserData = {
                    name: userData.name,
                    iconImg: userData.snoovatar_img,
                }
                dispatch(meRequestSuccess(myUserData))
            })
            .catch((error) => {
                console.log(error)
                dispatch(meRequestError(String(error)))
            })
    }, [token])

    return [data]
}
