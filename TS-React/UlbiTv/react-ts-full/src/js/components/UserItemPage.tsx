import React, { useState, useEffect } from "react"
import { IUser } from "../types/types"
import axios from "axios"
import { useParams, useNavigate } from "react-router-dom"

const UserItemPage = () => {
    const [user, setUser] = useState<IUser | null>(null)
    const params = useParams()
    const navigate = useNavigate()
    async function fetchUser() {
        try {
            //! типізуємо отриманий об'єкт із сервера
            const response = await axios.get<IUser>(
                "https://jsonplaceholder.typicode.com/users/" + params.id
            )
            setUser(response.data)
        } catch (error) {
            alert(error)
        }
    }
    useEffect(() => {
        fetchUser()
    }, [])
    return (
        <div>
            <button onClick={() => navigate("/")}>Back</button>
            <h1>Сторінка користувача {user?.name}</h1>
            <div>{user?.email}</div>
            <div>{user?.address.street}</div>
        </div>
    )
}

export default UserItemPage
