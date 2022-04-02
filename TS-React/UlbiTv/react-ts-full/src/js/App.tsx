import React from "react"
import {
    BrowserRouter,
    HashRouter,
    Route,
    Routes,
    NavLink,
    Router,
} from "react-router-dom"
import Card from "./components/Card"
import { CardVariant } from "./components/Card"

import EventsExample from "./components/EventsExample"
import TodoItemPage from "./components/TodoItemPage"
import TodosPage from "./components/TodosPage"
import UserItemPage from "./components/UserItemPage"
import UsersPage from "./components/UserPage"

export const App: React.FC = () => {
    //! типізуємо стейт даних із серевера

    return (
        <div>
            <HashRouter>
                <div>
                    <div>
                        <NavLink to={"/"}>Користувачі</NavLink>
                        <NavLink to={"/todos"}>Справи</NavLink>
                    </div>
                </div>
                <Routes>
                    <Route path="/" element={<UsersPage />} />
                    <Route path="/todos" element={<TodosPage />} />
                    <Route path="/:id" element={<UserItemPage />} />
                    <Route path="/todos/:id" element={<TodoItemPage />} />
                </Routes>
            </HashRouter>
        </div>
    )
}
