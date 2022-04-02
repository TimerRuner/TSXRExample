import React from "react"
import { Navbar } from "./components/Navbar"
import { HashRouter, Routes, Route } from "react-router-dom"
import { TodosPage } from "./pages/TodosPage"
import { AboutPage } from "./pages/AboutPage"

export const App: React.FC = () => {
    return (
        <HashRouter>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/" element={<TodosPage />} />
                </Routes>
            </div>
        </HashRouter>
    )
}
