import React from "react"
import { TodoList } from "./components/TodoList"
import UserList from "./components/UserList"

export const App: React.FC = () => {
    return (
        <div>
            <UserList />
            <hr style={{ margin: "10px 0" }} />
            <TodoList />
        </div>
    )
}
