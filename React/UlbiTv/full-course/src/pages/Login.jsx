import React, { useContext } from "react"
import MyInput from "../components/UI/input/MyInput"
import MyButton from "../components/UI/button/MyButton"
import { AuthContext } from "../context"

const Login = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext)
    const submit = (e) => {
        e.preventDefault()
        setIsAuth(true)
        localStorage.setItem("auth", "true")
    }

    return (
        <div>
            <h1>Сторінка Логіну</h1>
            <form onSubmit={submit}>
                <MyInput type="text" placeholder="Введіть логін" />
                <MyInput type="password" placeholder="Введіть пароль" />
                <MyButton>Увійти</MyButton>
            </form>
        </div>
    )
}

export default Login
