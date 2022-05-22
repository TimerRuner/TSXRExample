import {
    ADD_TODO,
    FETCH_TODOS,
    HIDE_ERROR,
    REMOVE_TODO,
    SHOW_ERROR,
    SHOW_LOADER,
    HIDE_LOADER,
    UPDATE_TODO,
} from "../types"

export const todoReducer = (state, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: action.id,
                        title: action.title,
                    },
                ],
            }
        case REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.id),
            }
        case UPDATE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    if (todo.id === action.id) {
                        todo.title = action.title
                    }
                    return todo
                }),
            }
        case SHOW_LOADER:
            return { ...state, loading: true }
        case HIDE_LOADER:
            return { ...state, loading: false }
        case SHOW_ERROR:
            return { ...state, error: action.error }
        case HIDE_ERROR:
            return { ...state, error: null }
        case FETCH_TODOS:
            return { ...state, todos: action.todos }
        default:
            return state
    }
}
