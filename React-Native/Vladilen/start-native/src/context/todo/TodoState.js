import React, { useReducer, useContext } from "react"
import { ScreenContext } from "../screen/screenContext"
import {
    ADD_TODO,
    FETCH_TODOS,
    HIDE_ERROR,
    HIDE_LOADER,
    REMOVE_TODO,
    SHOW_ERROR,
    SHOW_LOADER,
    UPDATE_TODO,
} from "../types"
import { TodoContext } from "./todoContext"
import { todoReducer } from "./todoReducer"
import { Alert } from "react-native"
import { Http } from "../../http"

export const TodoState = ({ children }) => {
    const initialState = {
        todos: [],
        loading: false,
        error: null,
    }
    const { changeScreen } = useContext(ScreenContext)
    const [state, dispatch] = useReducer(todoReducer, initialState)

    const addTodo = async (title) => {
        try {
            const data = await Http.post(
                "https://react-native-todo-app-c186f-default-rtdb.europe-west1.firebasedatabase.app/todos.json",
                { title }
            )
            dispatch({
                type: ADD_TODO,
                title,
                id: data.name,
            })
        } catch (error) {
            showError("Smth wrong...")
        }
    }

    const removeTodo = (id) => {
        const todo = state.todos.find((t) => t.id === id)
        Alert.alert(
            "Delete todo",
            `Do you want to delete ${todo.title} ?`,
            [
                {
                    text: "Cancel",
                    style: "cancel",
                },
                {
                    text: "Delete",
                    style: "destructive",
                    onPress: async () => {
                        changeScreen(null)
                        try {
                            await Http.delete(
                                `https://react-native-todo-app-c186f-default-rtdb.europe-west1.firebasedatabase.app/todos/${id}.json`
                            )

                            dispatch({ type: REMOVE_TODO, id })
                        } catch (error) {
                            showError("Smth wrong...")
                        }
                    },
                },
            ],
            {
                cancelable: true,
            }
        )
    }

    const updateTodo = async (id, title) => {
        clearError()
        try {
            await Http.patch(
                `https://react-native-todo-app-c186f-default-rtdb.europe-west1.firebasedatabase.app/todos/${id}.json`,
                { title }
            )
            dispatch({ type: UPDATE_TODO, id, title })
        } catch (error) {
            showError("Something wrong, try again...")
        }
    }

    const showLoader = () => dispatch({ type: SHOW_LOADER })
    const hideLoader = () => dispatch({ type: HIDE_LOADER })
    const showError = (error) => dispatch({ type: SHOW_ERROR, error })
    const clearError = () => dispatch({ type: HIDE_ERROR })

    const fetchTodos = async () => {
        showLoader()
        clearError()
        try {
            const data = await Http.get(
                "https://react-native-todo-app-c186f-default-rtdb.europe-west1.firebasedatabase.app/todos.json"
            )

            const todos = Object.keys(data).map((key) => ({
                ...data[key],
                id: key,
            }))
            dispatch({ type: FETCH_TODOS, todos })
        } catch (error) {
            showError("Something wrong, try again...")
        } finally {
            hideLoader()
        }
    }

    return (
        <TodoContext.Provider
            value={{
                todos: state.todos,
                loading: state.loading,
                error: state.error,
                addTodo,
                removeTodo,
                updateTodo,
                fetchTodos,
            }}
        >
            {children}
        </TodoContext.Provider>
    )
}
