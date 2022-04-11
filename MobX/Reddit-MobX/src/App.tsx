import React, { useEffect, useState } from "react"
import "./main.global.css"
import { hot } from "react-hot-loader/root"
import { Layout } from "./shared/Layout"
import { Header } from "./shared/Header/Header"
import { Content } from "./shared/Content"
import { CardsList } from "./shared/CardsList"
import { useToken } from "./hooks/useToken"
import { tokenContext } from "./shared/context/tokenContext"
import { UserContextProvider } from "./shared/context/userContext"
import { applyMiddleware, createStore, Middleware } from "redux"
import { Provider } from "react-redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import { rootReducer } from "./store/store"
import { BrowserRouter, Router, Routes, Route } from "react-router-dom"
import { Post } from "./shared/Post"

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

export function AppCopmonent() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const [token] = useToken()
    return (
        <Provider store={store}>
            <tokenContext.Provider value={token}>
                <UserContextProvider>
                    {mounted && (
                        <BrowserRouter>
                            <Layout>
                                <Header />
                                <Content>
                                    <CardsList />
                                    <Routes>
                                        <Route
                                            path="/posts/:id"
                                            element={<Post />}
                                        />
                                    </Routes>
                                </Content>
                            </Layout>
                        </BrowserRouter>
                    )}
                </UserContextProvider>
            </tokenContext.Provider>
        </Provider>
    )
}

export const App = hot(() => <AppCopmonent />)
