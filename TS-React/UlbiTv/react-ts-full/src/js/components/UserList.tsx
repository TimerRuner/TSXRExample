import React from "react"
import { IUser } from "../types/types"
import UserItem from "./UserItem"

interface UserListProps {
    users: IUser[] //? описали об'єкт, який прийде із сервера в якості пропса
}

const UserList: React.FC<UserListProps> = ({ users }) => {
    return (
        <div>
            {users.map((user) => (
                <UserItem key={user.id} user={user} />
            ))}
        </div>
    )
}

export default UserList
