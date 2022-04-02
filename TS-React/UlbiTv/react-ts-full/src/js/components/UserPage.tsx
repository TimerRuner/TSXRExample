import React, { useEffect, useState } from "react"
import { IUser } from "../types/types"
import axios from "axios"
import List from "./List"
import UserItem from "./UserItem"
import { useNavigate } from "react-router-dom"

const UsersPage: React.FC = () => {
    const [users, setUsers] = useState<IUser[]>([])
    const navigate = useNavigate()
    async function fetchUsers() {
        try {
            //! типізуємо отриманий об'єкт із сервера
            const response = await axios.get<IUser[]>(
                "https://jsonplaceholder.typicode.com/users"
            )
            setUsers(response.data)
        } catch (error) {
            alert(error)
        }
    }
    useEffect(() => {
        fetchUsers()
    }, [])
    return (
        <div>
            <List
                items={users}
                renderItem={(user: IUser) => (
                    <UserItem
                        onClick={() => navigate(`/${user.id}`)}
                        user={user}
                        key={user.id}
                    />
                )}
            />
        </div>
    )
}

export default UsersPage
